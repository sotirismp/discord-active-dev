# Discord Active Developer Badge Bot 🛠️

This is a simple **Discord bot** built with [discord.js](https://discord.js.org) and [Bun](https://bun.sh) that helps you claim the **Discord Active Developer Badge**.

The bot provides a single slash command `/active` which fulfills Discord's requirement of running an application command. Once executed, you’ll be eligible to claim the badge through the [Active Developer Badge portal](https://discord.com/developers/active-developer).

---

## ✨ Features

- Logs in with your bot’s token.
- Registers the `/active` slash command.
- Replies with an embed that guides you to claim the badge.
- Lightweight and runs on **Bun** (faster than Node.js).

---

## 📋 Requirements

Before using this bot, make sure you have:

- [Bun](https://bun.sh) installed (v1.0+ recommended).
- A Discord account.
- A Discord application with a **bot** created in the [Discord Developer Portal](https://discord.com/developers/applications).
- Your bot’s **token** (found in the Developer Portal under _Bot → Token_).
- The bot invited to at least one server where you have permissions.

---

## ⚙️ Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/sotirismp/discord-active-dev
   cd discord-active-dev
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Create an environment file**
   Create a `.env` file in the root directory:

   ```env
   TOKEN=your-bot-token-here
   ```

4. **Run the bot**

   ```bash
   bun start
   ```

   You should see logs like:

   ```
   Discord Active Developer Badge
   Logged in as MyBot#1234!
   ✔ Use this link to add your bot to your server: https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=applications.commands%20bot
   ```

---

## 🚀 Usage

1. Invite the bot to your Discord server using the generated OAuth2 link.
2. In any channel, type:
   ```
   /active
   ```
3. The bot will respond with an embed confirming that you’ve successfully run the slash command.
4. Go to [Discord’s Active Developer Badge portal](https://discord.com/developers/active-developer) and claim your badge 🎉

---

## ⚠️ Important Note

To **keep your Active Developer Badge**, you must run the `/active` command at least **once per month**.  
If you fail to use the command within 30 days, Discord may remove your badge.

---

## 📌 Notes

- Verification for the badge may take up to **24 hours**.
- You must run the `/active` command at least **once** on a server where the bot is present.
- This bot is minimal by design — it’s built specifically for earning and maintaining the badge.

---

## 🛠️ Tech Stack

- [Bun](https://bun.sh) — JavaScript runtime
- [discord.js v14](https://discord.js.org/) — Discord API library
- [chalk](https://www.npmjs.com/package/chalk) — Terminal string styling
