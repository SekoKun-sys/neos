
const {MessageEmbed} = require("discord.js");
const sa = require("superagent");

module.exports = {
    name: "wallpaper",
    aliases: ["walls"],
    descripion: "Выдаёт рандомные обои",
    public: true,
    run: async (client, message, args) => {
        const {body} = await sa
        .get(`https://nekos.life/api/v2/img/wallpaper`)

        let e = new MessageEmbed()
        .setAuthor("Рандомные обои на ваш стол")
        .setImage(body.url)
        .setColor(config.color)
        message.channel.send(e)
    }
}