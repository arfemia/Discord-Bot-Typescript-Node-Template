import { Client } from 'discord.js'
import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';
import { validateEnv } from './utils/validateEnv';

// wrap in called async function to enable top level await
(async () => {

	// Validate env variables - console warned within function if failed
	if (!validateEnv()) return;
	console.log('ENV variables loaded successfully')

	const BOT = new Client({ intents: IntentOptions })
	console.log('Starting Discord bot client')
	
	BOT.on("ready", () => onReady(BOT));
	
	// inject interaction handler
	BOT.on(
		"interactionCreate",
		async (interaction) => onInteraction(interaction) 
	);

	
	await BOT.login(process.env.BOT_TOKEN);

})();