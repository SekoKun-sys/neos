let {MessageEmbed} = require("discord.js");
let {getMember} = require("../../util/lib/functions");

module.exports = {
    name: "avatar",
    public: true,
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "))
        let embed = new MessageEmbed()
        .setAuthor(`Аватар ${message.author.username}`)
        .setImage(member.user.avatarURL())
        .setColor(config.color)
        message.channel.send(embed)
    }
}