const axios = require('axios');

const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (token == null) return res.sendStatus(401);
  const botToken = req.body.code;
  const response = await axios.get(`https://api.telegram.org/bot${botToken}/getUpdates`);
   if(response.data.ok === false) return res.sendStatus(403);
  next();
};

module.exports = { authenticateToken };