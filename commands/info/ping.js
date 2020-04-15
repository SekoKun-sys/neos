let {MessageEmbed} = require("discord.js");

module.exports = {
    name: "ping",
    public: true,
    description: "Показывает пинг бота",
    run: async (client, message, args) => {
        let emb1 = new MessageEmbed()
        .setDescription(`🏓Обработка...`)
        .setColor(config.color)
        message.channel.send(emb1).then(m => {
            let lat = m.createdTimestamp - message.createdTimestamp
        let ping = client.ws.ping
        let emb2 = new MessageEmbed()
        .setDescription(`⚙️**Пинг**: ${ping} \n
        ⚙️**Latency**: ${lat}`)
        .setColor(config.color)
        m.edit(emb2)
        })
    }
}