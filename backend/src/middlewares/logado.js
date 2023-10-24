const messageModel = require('../../models/');

const checkLoginMiddleware = async (req, res, next) => {
  try {
    console.log(messageModel.LoginStatuses.findByPk(1))
    const loginStatus = await messageModel.LoginStatuses.findByPk(1);
    if (loginStatus && loginStatus.isActive === false) {
      next();
    } else {
      res.status(403).json({ message: 'Acesso não autorizado. Faça o login.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao verificar status de login.' });
  }
};

module.exports = checkLoginMiddleware;
