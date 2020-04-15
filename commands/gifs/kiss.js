const sa = require("superagent");
let {MessageEmbed} = require("discord.js");
let {fMember} = require("../../util/lib/functions");

module.exports = {
    name: "kiss",
    public: true,
    description: "Поцеловать",
    run: async (client, message, args) => {
        let member = fMember(message, args.join(" "))
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/kiss`)

        let emb = new MessageEmbed()
        .setTitle(`${message.author.username} поцеловал ${member.user.username}`)
        .setColor(config.color)
        .setImage(body.url)
        message.channel.send(emb)
    }
}