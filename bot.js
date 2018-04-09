const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'A') {
    	client.message.send('A');
  	}
});

client.on('message', message => {
    if (message.content === 'B') {
    	client.message.send('B');
  	}
});

client.on('message', message => {
    if (message.content === 'C') {
    	client.message.send('C');
  	}
});

client.login(process.env.BOT_TOKEN);
