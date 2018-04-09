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
        
client.login(process.env.BOT_TOKEN);
