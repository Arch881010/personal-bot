const { SlashCommandBuilder } = require('discord.js');
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function average(numbers) {
	x = 0;
	averagedint = 0;
	while ((numbers.length + 1)>x) {
		averagedint = numbers[x] + averagedint;
		x = x + 1;
	}
	return averagedint
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('tornado')
		.setDescription('Replies with a tornado and EF rating!'),
	async execute(interaction) {
		console.log("Interacted - ef.")
		randint = average([getRandomArbitrary(0,100), getRandomArbitrary(0,100), getRandomArbitrary(0,100), getRandomArbitrary(0,100)])
		if (randint < 51) {
			efrating = 0
		} else if(randint < 71) {
			efrating = 1
		} else if(randint < 81) {
			efrating = 2
		} else if(randint < 86) {
			efrating = 3
		} else if(randint < 98) {
			efrating = 4
		} else {
			efrating = 5
		}

		await interaction.reply(`:cloud_tornado: EF-${efrating}`);
	},
};