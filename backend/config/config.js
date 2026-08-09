require("dotenv").config();

const databaseConfig = {
  username: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  host: process.env.MYSQL_ADDON_HOST,
  port: Number(process.env.MYSQL_ADDON_PORT || 3306),
  dialect: "mysql",
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  development: databaseConfig,
  test: {
    ...databaseConfig,
    database: process.env.MYSQL_TEST_DB || `${process.env.MYSQL_ADDON_DB}_test`,
  },
  production: databaseConfig,
};
