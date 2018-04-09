const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Voracious L') {
    	message.reply('Better luck next time');
  	}
});

client.on('message', message => {
    if (message.content === 'Voracious W') {
    	message('GG Voracious');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
