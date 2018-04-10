const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Voracious W') {
    	message.reply('Data reported');
    if (message.content === 'Voracious L') {
    	message.reply('Data reported');
  	}
});


client.login(process.env.BOT_TOKEN);
