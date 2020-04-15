const sa = require("superagent");
let {MessageEmbed} = require("discord.js");
let {fMember} = require("../../util/lib/functions");

module.exports = {
    name: "hug",
    public: true,
    description: "Обнять",
    run: async (client, message, args) => {
        let member = fMember(message,args.join(" "))
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/hug`)
        let emb = new MessageEmbed()
        .setTitle(`${message.author.username} обнял ${member.user.username}`)
        .setImage(body.url)
        .setColor(config.color)
    }
}