let {MessageEmbed} = require("discord.js");

module.exports = {
    name: "clear",
    public: true,
    description: "Очищает чат",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Ты не можешь удалять сообщения....").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Хм.... Это точно число? Я не могу удалить 0 сообщений.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Простии... Я не могу удалять сообщения.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Я удалила \`${deleted.size}\` сообщений.`))
            .catch(err => message.reply(`Здесь ошибочка... ${err}`));
    }
}