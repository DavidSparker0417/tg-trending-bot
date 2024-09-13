import { session, Telegraf } from "telegraf"

const bot = new Telegraf(process.env.BOT_TOKEN, {handlerTimeout: 9_000_000})
bot.use(session())
bot.launch()