/* eslint-disable node/no-process-exit */
import { client, onInteraction, onReady } from "@/src/config";
import chalk from "chalk";
import { Events } from "discord.js";

console.log(chalk.bold.green("Discord Active Developer Badge"));

console.log(
  chalk.bold(
    "This tool will help you to get the " +
      chalk.cyan.underline("Discord Active Developer Badge")
  )
);

try {
  client.login(process.env.TOKEN);
} catch (_e) {
  process.exit(0);
}

client.on("ready", onReady);

client.on(Events.InteractionCreate, onInteraction);
