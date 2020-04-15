let math = require("mathjs")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "calc",
    public:true,
    run: async (client, message, args) => {
        if(!args[0]) {
            return message.channel.send("Укажите пожалуйста пример")
        } else {
            let resp;
            try {
                resp = math.evaluate(args.join(" "))
            } catch (e) {
                return message.channel.send("Вы указали неправильный пример")
            }
            if(isNaN(args[0])) return message.channel.send("Вы указали не число")
            if(isNaN(args[2])) return message.channel.send("Вы указали не число")
            let emb = new MessageEmbed()
            .setTitle("Математические вычисления")
            .addField("Пример", `\`\`\`${args.join(" ")}\`\`\``)
            .addField("Ответ", `\`\`\`${resp}\`\`\``)
            .setColor(config.color)
            message.channel.send(emb)
        }
        }
    }