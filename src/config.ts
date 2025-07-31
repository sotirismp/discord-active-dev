import chalk from "chalk";
import {
  CacheType,
  Client,
  EmbedBuilder,
  IntentsBitField,
  Interaction,
  MessageFlags,
} from "discord.js";
import ora from "ora";

export const spinner = ora(chalk.bold("Running Discord Bot\n")).start();
export const slashSpinner = ora(
  chalk.bold("Creating slash command interaction...\n")
);

export const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

export const onReady = async (client: Client<true>) => {
  spinner.succeed(
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

  slashSpinner.text = chalk.bold(
    "Go to your Discord Server (where you added your bot) and use the slash command " +
      chalk.cyan.bold("/active\n")
  );
  slashSpinner.start();
};

export const onInteraction = async (interaction: Interaction<CacheType>) => {
  try {
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

    slashSpinner.succeed(
      chalk.bold(
        "You have successfully ran the slash command! Follow the instructions in Discord Message that you received!. Now you can close this application by pressing Ctrl + C"
      )
    );

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  } catch {
    slashSpinner.fail(
      chalk.bold.red(
        "Error while creating slash command interaction! This can sometimes happen, but don't worry - just kick your bot from the server and run this application again!"
      )
    );
  } finally {
    process.exit(0);
  }
};
