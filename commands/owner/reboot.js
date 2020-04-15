const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "reboot",
    public: false,
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setDescription(`Перезагрузка...`)
        .setColor(config.color)
        message.channel.send(embed).then(m => {
            let em = new MessageEmbed()
            .setDescription(`[✅] Перезагрузка завершена!`)
            .setColor(config.color)
            m.edit(em)
            client.destroy()
            client.login(config.token)
        })
    }
}