const messageModel = require('../../models/');
const { Telegraf } = require('telegraf');

const receiveMessage = async (userId, message, socket) => {
  try {

    const data = {
      id: userId,
      message: message
    };
    const newSendMessage = await messageModel.SendMessage.create(data);
    await newSendMessage.save();
    socket.emit('new-message', { from: { first_name: userId }, text: message });
    return 'salvo';;
  } catch (e) {
    return null;
  }
};

const createSendMessage = async (data, chatId) => {
  try {
      const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
      console.log('bot', bot)
      if(data.caption) {
        const msg = {
          id: 'voce',
          message: data.caption
        };
        const image = 'https://media0.giphy.com/media/sxkP02MRihq3uJDzW8/giphy.gif?cid=6c09b952grnip5s3ofdfoelgwzl8y4ckrrrkhbm407b5bddh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s'
        const newSendMessage = await messageModel.SendMessage.create(msg);   
        await newSendMessage.save();
        
        bot.telegram.sendMessage(chatId, msg.message);
        bot.telegram.sendPhoto(chatId, image )
      }
      if(!data.caption) {
        const msg = {
          id: 'voce',
          message: data.caption || data
        };
        const newSendMessage = await messageModel.SendMessage.create(msg);
        await newSendMessage.save();  
        bot.telegram.sendMessage(chatId, msg.message);
      }
      return true;
    } catch (e) {
      return null;
    }
  }

const login = async () => {
  try {
  
   await messageModel.LoginStatus.update({ is_active: true }, { where: { id: 1 } });
   return true
  } catch (e) {
    return null
  }
}
const logout = async () => {
  try {
    await messageModel.LoginStatus.update({ is_active: false }, { where: { id: 1 } });

   return true;
  } catch (e) {
  
    return null
  }
}


module.exports = {
  receiveMessage,
  createSendMessage,
  login,
  logout
};
