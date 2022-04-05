import { Interaction } from "discord.js";
import { CommandList } from "../_CommandList";

export const onInteraction = async (interaction: Interaction) => {

    // Ensure interaction is a slash command
    if (interaction.isCommand()) {

        // Search through command list to match interaction to command
        for (const Command of CommandList) {

            // match found - run command
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
                break;
            }
        }
    }
};