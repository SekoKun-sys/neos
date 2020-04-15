const sa = require("superagent");
let {MessageEmbed} = require("discord.js");
let {fMember} = require("../../util/lib/functions");

module.exports = {
    name: "slap",
    public: true,
    description: "Дать пощёчину",
    run: async (client, message, args) => {
        let member = fMember(message, args.join(" "))
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/slap`)

        let embed = new MessageEmbed()
        .setColor(config.color)
        .setTitle(`${message.author.username} дал пощёчину ${member.user.username}`)
        .setImage(body.url)
        message.channel.send(embed)
        
    }
}