const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Voracious W') {
    	send_message('Win');
  	}
});
client.on('message', message => {
    if (message.content === 'Voracious L') {
    	send_message('Loss');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
