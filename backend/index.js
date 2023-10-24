const express = require('express');
require('dotenv').config();
const apiRoutes = require('./src/routes/apiRoutes');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const http = require('http');
const app = express();
const socketIo = require('socket.io');
const telegramService = require('./src/service/Telegramservice');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://projetobot-frontend.vercel.app",
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: 'https://projetobot-frontend.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  next();
});


io.on('connection', (socket) => {
  console.log('Um cliente se conectou');
  bot.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });

  bot.on('text', async (ctx) => {
    const messageText = ctx.text;
    const chatId = ctx.from?.first_name;
    
    telegramService.receiveMessage(chatId,messageText, socket);
    if(messageText=== '/start'){
      const banner = "Bem vindo(a)\n\n"
      const padding = ''.repeat(Math.floor((process.stdout.columns - banner.length) /2))
      const centeredBanner = padding + banner;
      const message = "Bem vindo ao bot de processo seletivo";
      const id = `para acessar aplicação seu link do chat é ${ctx.chat.id}`    
      const b = ({caption: centeredBanner + message + id })
      telegramService.createSendMessage(b, ctx.chat.id)
    }
  });
});




app.use(express.json());
app.use('/', apiRoutes);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
