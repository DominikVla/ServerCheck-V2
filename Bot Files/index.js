const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 
const mcs = require('node-mcstatus');

client.commands = new Collection();

require('dotenv').config();

const host = 'valhoes.serv.gs';
const port = 25565;
const options = { query: false };

client.on("ready", () => {
    setInterval(() => {
        //const status = activities[Math.floor(Math.random() * activities.length)];
        //client.user.setPresence({activities: [{name: `${status}`}]});

    mcs.statusJava(host, port, options)
    .then((result) => {
        let servstatus = result.online;
        let playCount = result.players.online;

        switch (servstatus) {
            case true:
                client.user.setActivity(`Server Online, Players:${playCount}`);
                break;
            case false:
                client.user.setActivity('Server is offline');
                break;        
        }
    })
    .catch((error) => {
        client.user.setActivity('An error occured with the API, use command');
    })
    }, 45000);
    
    client.user.setPresence({
        status: 'online'
    });
})


const functions = fs.readdirSync("./functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, "./commands");
    client.login(process.env.token)
})();

