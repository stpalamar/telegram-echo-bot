import { Bot } from 'grammy';
import 'dotenv/config';

const bot = new Bot(process.env.TOKEN_BOT!);

bot.command('start', (ctx) => ctx.reply('Hello my friend!'));
bot.on('message:text', (ctx) => ctx.reply('Your message: ' + ctx.message.text));

bot.start();
console.log('Bot started!');
