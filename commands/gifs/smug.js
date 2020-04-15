const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "smug",
    public: true,
    description: "Возгордиться",
    run: async (client, message, args) => {
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/smug`)

        let e = new MessageEmbed()
        .setAuthor(`${message.author.username} уверен в себе`)
        .setImage(body.url)
        .setColor(config.color)
        message.channel.send(e)
    }
}