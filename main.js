const { Client,Intents } = require('discord.js');
const fs = require("fs");

const Config = require("./Config.json")

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on("ready", () => {
    console.log(`"[ Fantasy ] 도우미" 가 온라인 되었습니다.`);
});

bot.on("messageCreate", (message) => {
    if(message.content == "ping"){
        message.channel.send("Pong!")
    }
});

bot.login(Config.Token);