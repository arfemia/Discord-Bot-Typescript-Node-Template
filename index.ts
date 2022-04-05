// PERMISSIONS INTEGER: 19520
// PUBLIC INVITE URL: https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D960980519066157158%26permissions%3D19520%26scope%3Dbot





// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Get environment variables (Discord Developer token)
const dotenv = require('dotenv')
dotenv.config();
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
