// PERMISSIONS INTEGER: 19520
// PUBLIC INVITE URL: https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D960980519066157158%26permissions%3D19520%26scope%3Dbot
// BOT TOKEN: OTYwOTgwNTE5MDY2MTU3MTU4.YkyU2Q.q1oCu_jt61-Y1iHKPyTD-ssZ0TQ 

const Discord = require('discord.js');


const client = new Discord.client;
client.login("OTYwOTgwNTE5MDY2MTU3MTU4.YkyU2Q.q1oCu_jt61-Y1iHKPyTD-ssZ0TQ");

client.on('ready', async () => {
  console.log(`Logged in successfully as bot!`);
});