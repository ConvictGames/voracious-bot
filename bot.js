const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Voracious W') {
    	message.reply('Data Processed');
  	}
});

client.on('message', message => {
    if (message.content === 'Voracious L') {
    	message.reply('Data Processed');
  	}
});


client.login(process.env.BOT_TOKEN);
