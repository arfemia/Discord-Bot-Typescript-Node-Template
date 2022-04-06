import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const command: Command = {

    // Command usage in Discord: /test message:{text}
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test command description')

        // input parameter 'message'
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription("The message to go in your 100 Days of Code update.")
                .setRequired(true)
        ),

    // function to be run from command /test message:{text}
    run: async (interaction) => {
        await interaction.deferReply();

        const { user } = interaction;

        // get result of user input 'message'
        const text = interaction.options.getString("message", true);

        // create response embedded message
        const embedResult = new MessageEmbed();
        embedResult.setTitle("Sample Message Title");
        embedResult.setDescription('Sample Message Description');
        embedResult.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        embedResult.addField("Your Input", text, true);
        embedResult.setFooter({
            text:
                "Current Date: " +
                new Date().toLocaleDateString(),
        });

        // display embed result
        await interaction.editReply({ embeds: [embedResult] });
    }
}