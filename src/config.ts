import chalk from "chalk";
import {
  CacheType,
  Client,
  EmbedBuilder,
  IntentsBitField,
  Interaction,
  MessageFlags,
} from "discord.js";

export const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

export const onReady = async (client: Client<true>) => {
  console.log(
    chalk.bold(`Logged in as ${chalk.cyan.underline(client.user.tag)}!`)
  );
  console.log(
    chalk.bold.green("✔") +
      chalk.bold(
        " Use this link to add your bot to your server: " +
          chalk.cyan.italic.underline(
            `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands%20bot\n`
          )
      )
  );

  await client.application?.commands.set([
    {
      name: "active",
      description: "Get the Discord Active Developer Badge",
    },
  ]);
};

export const onInteraction = async (interaction: Interaction<CacheType>) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName !== "active") return;

  console.log(chalk.bold.green("Slash command interaction received!"));

  const embed = new EmbedBuilder()
    .setAuthor({
      name: "Discord Active Developer Badge",
      iconURL:
        "https://cdn.discordapp.com/emojis/1040325165512396830.webp?size=64&quality=lossless",
    })
    .setTitle("You have successfully ran the slash command!")
    .setColor("#34DB98")
    .setDescription(
      "- Go to *https://discord.com/developers/active-developer* and claim your badge\n - Verification can take up to 24 hours, so wait patiently until you get your badge"
    );

  await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
};
