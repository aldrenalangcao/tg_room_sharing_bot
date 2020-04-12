require('dotenv').config();
const { default: Telegraf, Telegram } = require('telegraf');

const getMeme = require('./services/getMeme');

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

bot.command('yawa', (ctx) =>
  getMeme().then(({ url }) => ctx.replyWithPhoto(url))
);

bot.on('message', (ctx) => {
  const { update } = ctx;
  const { message } = update;
  const { from, chat, text } = message;
  if (/haha/.test(text)) ctx.reply('hahahahaha taena');
  if (/total/.test(text)) ctx.reply('hays. bayaran na naman. huhu');
});

// telegram
//   .sendMessage(-440933164, 'Sent from bot')
//   .then(console.log)
//   .catch(console.log);

const timeout = 1;
const limit = 100;
bot
  .launch({
    polling: { timeout, limit },
  })
  .then(() => console.log('Chatbot started'))
  .catch((err) => console.log(err));
