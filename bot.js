const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
if (message.channel.id === 432998067013419050)
    if(message.content === 'Voracious W'){
    	message.channel.send('+1 for Voracious')
  	}
});


client.login(process.env.BOT_TOKEN);
