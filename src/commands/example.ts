import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const command: Command = {
    data: new SlashCommandBuilder()
        .setName('100')
        .setDescription('test')
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription("The message to go in your 100 Days of Code update.")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply();

        const { user } = interaction;
        const text = interaction.options.getString("message", true);

        const oneHundredEmbed = new MessageEmbed();
        oneHundredEmbed.setTitle("100 Days of Code");
        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        oneHundredEmbed.addField("Round", text, true);
        oneHundredEmbed.setFooter({
            text:
                "Day completed: " +
                new Date().toLocaleDateString(),
        });

        await interaction.editReply({ embeds: [oneHundredEmbed] });
    }
}