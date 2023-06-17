const {SlashCommandBuilder} = require('@discordjs/builders');
const util = require('minecraft-server-util');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Check server stat.'),
    async execute(interaction, client) {
            // Make sure this is within an async context
            try {
                const result = await util.status('valhoes.serv.gs');
                // Server is online
                await interaction.reply({content: 'Server Good :thumbsup:'});
            } catch (e) {
                // Server is offline
                await interaction.reply({content: 'Server dead :x: <@290480131745775616>'});
            }
    }
}
