const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'A') {
    	message.reply('A');
  	}
});

client.on('message', message => {
    if (message.content === 'B') {
    	message('B');
  	}
});

client.on('message', message => {
    if (message.content === 'C') {
    	client.message('C');
  	}
});

client.login(process.env.BOT_TOKEN);
