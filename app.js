require('dotenv').config();
const { default: Telegraf, Telegram } = require('telegraf');

const getMeme = require('./services/getMeme');

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

telegram
    .sendMessage(-1001438641108, 'Sent from bot')
    .then(console.log)
    .catch(console.log);