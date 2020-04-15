const {MessageEmbed} = require("discord.js");
const sa = require("superagent");

module.exports = {
    name: "8ball",
    aliases: ["8b"],
    public: true,
    run: async (client, message, args) => {
        let r = ["Да!", "Конечно!", "Нет", "Даже не думай", "Маловероятно", "Скорее нет, чем да", "Скорее да, чем нет", "Не знаю", "Пока не ясно", "Спроси позже"]
        let rand = r[Math.floor(Math.random() * r.length)]
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/8ball`)
        let con = args.slice(0).join(" ")
        if(!con) return message.channel.send(`Спроси меня о чём-нибудь`)
        let e = new MessageEmbed()
        .setAuthor(`Волшебный шар`)
        .addField(`${message.author.username} спросил:`,
        `\`\`\`${con}\`\`\``)
        .addField(`Шар сказал:`,
        `\`\`\`${rand}\`\`\``)
        .setColor(config.color)
        .setImage(`https://gph.is/1YCUPTI`)
        message.channel.send(e)
    }
}