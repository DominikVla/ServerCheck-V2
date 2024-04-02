# ServerCheck
Checks the status of a Minecraft (Java) server. This Bot is still being developed, more features to come. This will no longer be updated as I'd want to push toward a new file and code structure.

### What's the difference between ServerCheckV1 and V2?

Well the difference is that this version is able to use it's status as it uses [mcstatus.io's](https://mcstatus.io/) API to get it's data. The command available is a fallback incase their API goes down. View image below:
####
![Image of Bot activity](https://cdn.discordapp.com/attachments/911943403028234270/1119877280131448852/image.png)

# Required Install Commands
**[Node.JS Version that's recommended for most users](https://nodejs.org/en)**

[Discord.JS](https://discord.js.org/)
```
npm install discord.js
```
[MCServerUtil](https://passthemayo.gitbook.io/minecraft-server-util/)
```
npm install minecraft-server-util
```
[node-mcstatus](https://www.npmjs.com/package/node-mcstatus)
```
npm i node-mcstatus
```
## Commands
- /stats - checks the status of a minecraft server (Defaulted to Hypixel.net in commands/community/check.js line 11)

## Important
For the bot to function you need to be able to obtain your application Token, Client ID and Guild Id (Server ID)
- Application Token goes into the .env file || [Guide to get application token](https://www.writebots.com/discord-bot-token/)
- Client and Guild ID go into functions/handelCommands.js on lines 5 & 6
### To get the IDs do the following:
1. Make sure Developer mode is on (User Settings > Advanced)
2. Go onto a server with the Bot, right click the bot and press copy ID. This gives the Client ID.
3. Right click the server you're currently in and press copy ID. This is the Guild ID.
####
Reggarding hosting please keep in mind that the BOT need at a minimum 75MB of RAM.

## Useful links
- [Discord's documentation](https://discord.com/developers/docs/intro)
- [Minecraft server library documentaion](https://passthemayo.gitbook.io/minecraft-server-util/)
- [Very good tutorials, credits to MrJAwesomeYT for the Slash Command Package](https://www.youtube.com/@MrJAwesomeYT)
- [MCstatus's API Documentation](https://mcstatus.io/docs)

