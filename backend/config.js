require("dotenv").config();

const requiredVariables = ["TELEGRAM_BOT_TOKEN", "JWT_SECRET"];
const missingVariables = requiredVariables.filter(
  (variableName) => !process.env[variableName]
);

if (missingVariables.length > 0) {
  throw new Error(
    `Variáveis de ambiente obrigatórias ausentes: ${missingVariables.join(", ")}`
  );
}

module.exports = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  JWT_SECRET: process.env.JWT_SECRET,
};
