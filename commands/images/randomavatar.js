const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "randomavatar",
    public: true,
    run: async (client, message, args) => {
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/avatar`)

        let e = new MessageEmbed()
        .setAuthor(`Вот вам рандомный аватар`)
        .setImage(body.url)
        .setColor(config.color)
        message.channel.send(e)
    }
}