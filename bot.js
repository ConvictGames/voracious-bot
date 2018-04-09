const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if client.on('message', message => {
    if message.content === 'Voracious W'){
        [message.channel.id === '432998067013419050'.send('+1 for Voracious']);
        }
    }
});


client.login(process.env.BOT_TOKEN);
