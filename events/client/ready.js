const Discord = require("discord.js")


module.exports = client => {
     console.log(`${client.user.username} is online`)

    let statuses = [
        `${client.guilds.cache.size} гильдий!`,
        "_help",
        `всего ${client.users.cache.size} юзеров!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

}