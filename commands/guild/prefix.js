let {MessageEmbed} = require("discord.js");

module.exports = {
    name: "prefix",
    public: true,
    description: "Изменяет префикс бота на сервере",
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send(`Укажите новый префикс`)
        if(args[0] > 5) return message.channel.send(`Я не могу поставить префис, который больше 5 символов`)
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`У Вас недостаточно прав`)
        Guild.findOne({guildID: message.guild.id}, (err, data) => {
            data.prefix = args[0]
            data.save().catch(err => console.error(err))
            let embed = new MessageEmbed()
            .setAuthor(`Префикс успешно изменён!`)
            .setDescription(`⚙️**Текущий префикс**: ${data.prefix}`)
            .setColor("c20cf0")
            message.channel.send(embed)
        })
    }
}