const {MessageEmbed} = require("discord.js");
const {formatDate, getMember} = require("../../util/lib/functions");

module.exports = {
    name: "user",
    public: true,
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "))
        let joined = formatDate(member.user.joinedAt)
        let created = formatDate(member.user.createdAt)
        let embed = new MessageEmbed()
        .setAuthor(`Информация ${member.user.username}`)
        .addField(`Ник:`,
        `${member.user.username}`)
        .addField(`Ник на сервере:`,
        `${member.displayName}`)
        .addField(`Дискриминатор:`,
        `${member.user.discriminator}`)
        .addField(`Тэг:`,
        member.user.tag)
        .addField(`ID:`,
        `${member.user.id}`)
        .addField(`Статус:`,
        `${member.presence.status}`)
        .addField(`Зашёл на сервер:`,
        `${joined}`)
        .addField(`Создал аккаунт:`,
        `${created}`)
        .setColor(config.color)
        .setThumbnail(member.user.displayAvatarURL())
        message.channel.send(embed)
    }
}