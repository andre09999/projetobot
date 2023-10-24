require('dotenv').config();

const config = {
  username: process.env.PGUSER || 'root' || process.env.MYSQL_USER,
  password: process.env.PGPASSWORD || 'Secure123' || process.env.MYSQL_PASSWORD  ,
  database: process.env.PGDATABASE || 'BotTelegram' || process.env.MYSQL_DATABASE  ,
  host: process.env.PGHOST||'127.0.0.1' || process.env.MYSQL_HOST,
  dialect: 'mysql',
  connection: {
    options: `project=${process.env.ENDPOINT_ID}`,
  },
};


module.exports = {
  development: config,
  test: config,
  production: config,
};
