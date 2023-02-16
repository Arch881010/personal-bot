//:myminicoop:
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mini')
		.setDescription('Replies with a minicooper emoji!'),
	async execute(interaction) {
		console.log("Interacted - mini.")
        interaction.reply(`<:myminicoop:1067607794708127756>`)
    }
}