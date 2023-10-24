require('dotenv').config();

const config = {
  username: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || 'Secure123',
  database: process.env.MYSQL_ADDON_DB || 'BotTelegram',
  host: process.env.MYSQL_ADDON_HOST||'127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
