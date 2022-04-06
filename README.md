# Discord Bot Node.js and Typescript Boilerplate
**A template implementation of a Discord bot using Node.js and Typescript**

See the implementation of a sample command at [`src/commands/example.ts`](src/commands/example.ts)

This is starter code for running a single server discord bot. The server's ID is an environment variable. However, this could be reworked to get server(guild) IDs another way

# Setup
---
## Local Development
- Make sure you have Node installed and are using version `16.^`, have git installed, a Discord account, and have a GitHub account
- Clone this repository and then: 
    1. `cd <this-cloned-repo-location>`
    2. Create a new repository on GitHub for your new project to duplicate your cloned repository into
    3. `git remote set-url origin <url-of-new-repo>`
    4. `git push -u origin master`
- Create a `.env` file in the project's root directory and add environment variables
    - Add `BOT_TOKEN=YOUR_BOT_TOKEN_HERE` [Get Discord Bot ID](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
    - Add `GUILD_ID=YOUR_GUILD_ID_HERE`
        - In Discord, open your User Settings by clicking the Settings Cog next to your user name on the bottom.
        - Go to Appearance and enable Developer Mode under the Advanced section, then close User Settings.
        - Open your Discord server, right-click on the server name, then select Copy ID
        - Paste the Server ID in you .env file
        - If desired, you can disable Developer Mode now.
- Run `npm run build` then `npm start`
- If properly setup, you should see the following in your console:
    ```bash
    Env variables loaded successfully
    Starting Discord bot client...
    Discord bot client ready!
    ```
- Start customizing commands in [`src/commands/example.ts`](src/commands/example.ts)

## Deploy to Heroku
- ***BEFORE DEPLOYING TO HEROKU: [FOLLOW THE LOCAL DEVELOPMENT GUIDE](#local-development)*** to setup repository for your bot and ensure it works properly with discord in your local dev environment
- Ensure Procfile (no extension) exists in your project's root directory with contents: 
    ```bash
    worker: npm start
    ```
- Create a [Heroku App](https://signup.heroku.com/)
- Set up [Automatic Deployments with Github](https://devcenter.heroku.com/articles/github-integration)
- Ensure you have your most recent `BOT_TOKEN` from you Discord Bot admin panel
- Set [config vars](https://devcenter.heroku.com/articles/config-vars) on the settings page of your Heroku app dashboard:
    ```bash
    BOT_TOKEN=YOUR_BOT_TOKEN_HERE
    GUILD_ID=YOUR_GUILD_ID_HERE
    ```


