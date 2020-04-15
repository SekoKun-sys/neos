
const { readdirSync } = require("fs")

module.exports = (client) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            client.commands.set(pull.name, pull);
            pull.category = dirs;
            if (pull.aliases) pull.aliases.forEach(a => client.aliases.set(a, pull.name));
          };
        };
        ["user","images","utilities","fun", "guild", "owner", "info", "roleplay", "gifs", "moderation"].forEach(x => load(x));
};