# Smite-Discord-Bot-TypeScript-NodeJS
**A template implementation of a Discord bot using Node.js and Typescript**

See the implementation of a sample command at [`src/commands/example.ts`](src/commands/example.ts)

This is starter code for running a single server discord bot. The server's ID is an environment variable. However, this could be reworked to get server(guild) IDs another way

# Usage
---
## Local Development
- Make sure you are using Node Version 16.^, have git installed, a Discord account, and have a GitHub account
- Create a new GitHub repo
- Clone this repo and run: 
    1. `cd <cloned-repo-location>`
    1. `git remote set-url origin <url-of-new-repo>`
    1. `git push -u origin master`
- Create a `.env` file in the project's root directory and add environment variables
    - Add `BOT_TOKEN=YOUR_BOT_TOKEN_HERE` [Get Discord Bot ID](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
    - Add `GUILD_ID=YOUR_GUILD_ID_HERE`
        - In Discord, open your User Settings by clicking the Settings Cog next to your user name on the bottom.
        - Go to Appearance and enable Developer Mode under the Advanced section, then close User Settings.
        - Open your Discord server, right-click on the server name, then select Copy ID
        - Paste the Server ID in you .env file
        - If desired, you can disable Developer Mode now.
- Run `npm run build` then `npm start`

## Deploy to Heroku
- Ensure Procfile (no extension) exists in your project's root directory with contents: 
    ```bash
    worker: npm start
    ```
- Create a [Heroku App](https://signup.heroku.com/)
- Set up [Automatic Deployments with Github](https://devcenter.heroku.com/articles/github-integration)
- Set [config vars](https://devcenter.heroku.com/articles/config-vars) on the settings page of your Heroku app dashboard:
    ```bash
    BOT_TOKEN=YOUR_BOT_TOKEN_HERE
    GUILD_ID=YOUR_GUILD_ID_HERE
    ```


