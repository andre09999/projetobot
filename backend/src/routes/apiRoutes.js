const express = require('express');
const telegramController = require('../controllers/telegramController');
const { authenticateToken } = require('../middlewares/authenticate');
const checkLoginMiddleware = require('../middlewares/logado');

const router = express.Router();

router.post('/send', authenticateToken, telegramController.sendMessage);

router.post('/login',checkLoginMiddleware, telegramController.login);
router.post('/exit', telegramController.exit)

router.get('/', (req, res) => {
  res.send('escolha uma rota');
});

module.exports = router;
