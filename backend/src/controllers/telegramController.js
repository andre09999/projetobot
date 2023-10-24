const telegramService = require('../service/Telegramservice');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const sendMessage = async (req, res) => {
    try {
        const message = req.body.message;
        const chatId = req.body.chatId;
        const newSendMessage = await telegramService.createSendMessage(message, chatId);
        return res.status(201).json({ message: newSendMessage });
    } catch (error) {
        return res.status(403).json({ error: 'não deu certo' });
    }
};

const login = async (req, res) => {
    try {
        const token = req.header('Authorization');
        const botCode = req.body.botCode;

        if (!token || !botCode) {
            return res.sendStatus(401);
        }

        const response = await axios.get(`https://api.telegram.org/bot${botCode}/getUpdates`);

        if (!response.data.ok) {
            return res.sendStatus(403).json({ message: 'bot inexistente' });
        }

        const envFilePath = path.resolve(__dirname, '../../.env');
        let envContent = fs.readFileSync(envFilePath, 'utf-8');
        envContent += `\nTELEGRAM_BOT_TOKEN="${botCode}"`;
        fs.writeFileSync(envFilePath, envContent);

        const result = telegramService.login();

        if (result) {
            return res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            throw new Error('Erro interno do servidor');
        }
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }
};

const exit = (req, res) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.sendStatus(401);
        }

        const envFilePath = path.resolve(__dirname, '../../.env');
        let envContent = fs.readFileSync(envFilePath, 'utf-8');
        const lines = envContent.split('\n');
        lines.pop();
        const novoConteudo = lines.join('\n');
        fs.writeFileSync(envFilePath, novoConteudo, 'utf-8');

        const result = telegramService.logout();

        if (result) {
            return res.status(200).json({ message: 'Exit bem-sucedido' });
        } else {
            throw new Error('Exit mal-sucedido');
        }
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }
};

module.exports = {
    sendMessage,
    login,
    exit
};
