const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN):

import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

Client = discord.Client() #Initialise Client 
client = commands.Bot(command_prefix = "?") #Initialise client bot

@client.event
async def on_ready():
    print("Bot is online and connected to Discord") #This will be called when the bot connects to the server

loop = asyncio.get_event_loop()
@client.event
async def on_message(message):
    if 'Voracious W' in message.content:
        await client.send_message(message.channel, "W")
    if 'Voracious L' in message.content:
        await client.send_message(message.channel, "L")
    if 'Lacuna W' in message.content:
        await client.send_message(message.channel, "W")
    if 'Lacuna L' in message.content:
        await client.send_message(message.channel, "L")
    if 'TRIX W' in message.content:
        await client.send_message(message.channel, "W")
    if 'TRIX L' in message.content:
        await client.send_message(message.channel, "L")
    if 'Perihelion W' in message.content:
        await client.send_message(message.channel, "W")
    if 'Perihelion L' in message.content:
        await client.send_message(message.channel, "L")        
    if '3DT W' in message.content:
        await client.send_message(message.channel, "W")
    if '3DT L' in message.content:
        await client.send_message(message.channel, "L")
        
loop.run_forever()
