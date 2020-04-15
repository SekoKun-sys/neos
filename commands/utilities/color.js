const rh = require("random-hex");

const ds = require("discord.js");

module.exports = {
    name: "color",
    public:true,
    description: "Выдаёт рандомные цвета в виде hex",
    run: async (client, message, args) => {
        let r = rh.generate()
        let emb = new ds.MessageEmbed()
        .setDescription(`Ваш цвет: \`${r}\` \n
        👈 для предпросмотра`)
        .setColor(`${r}`)
        message.channel.send(emb)
    }
}