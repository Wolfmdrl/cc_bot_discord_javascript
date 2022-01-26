const { Client } = require('discord.js');

bot = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"], disableMentions: "everyone", intents: [["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]]});
bot.once("ready", function () {
    console.log("Carapuce est dans les places !");
});

bot.on("messageCreate", message => {
    if (message.content === "!carahelp") {
    //on envoie un message de type embed dans le channel d'où provient le 
   message
    message.channel.send({ 
    embed:[ { 
    color: 3447003, 
    description: "__**Les différentes commandes**__", 
    fields: [ 
    { 
    name: "!carahelp", 
    value: "Pour afficher cette aide."
    }, 
    { 
    name: "!ping", 
    value: "Pong !"
    } 
    ] 
    }
    ]
    }); 
   }
    if (message.content.startsWith("!pin")) {
    message.pin(); 
   }

    if (message.content === "!carabonjour") { 
        message.reply("carabonjour à toi !"); 
        message.react("\:smiley"); 
        message.react(bot.emojis.cache.get("56623217846642442")); 
   }
    if (message.content === "!ping") {
        message.reply("pong");
    }
});

bot.login("OTM1OTM3MTEwMzcwODQ0Njky.YfF5Ww.ep-_6xMWhnm2ZT8YuBDY1q9StzU");
