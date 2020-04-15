let {MessageEmbed} = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Показывает список команд",
    run: async (client, message, args) => {
        Guild.findOne({guildID: message.guild.id}, (err, data) => {
        function list(cat, cname) {
            return `**Команды категории ${cname}**: ${client.commands.filter(cmd => cmd.category == cat).map(cmd => `\n\`${data.prefix}${cmd.name}\` - ${cmd.description}`).join(" ")}`;
        }

            let pf = data.prefix
        let emb = new MessageEmbed
        emb.setColor(config.color)
        if(!args[0]) {
            emb.setTitle(`**Список команд ${client.user.username}**`)
            emb.setThumbnail(client.user.avatarURL())
            emb.setDescription(`**Префикс бота на сервере:** \`${data.prefix}\` \n **Создатель бота**: <@388218132067516417> \n \n
            **Список категорий**: \n
            \`${data.prefix}help fun\` \t
            \`${pf}help gifs\` \t
            \`${data.prefix}help guild\`\t
            \`${pf}help images\` \t
            \`${data.prefix}help info\` \t
            \`${pf}help moderation\` \t
            \`${pf}help roleplay\` \t
            \`${pf}help user\` \t
            \`${pf}help utilities\``)
            emb.setFooter(`Все права защищены | 2020 |`)
            return message.channel.send(emb)
              }
              if(args[0] === "fun") {
                  emb.setDescription(`${list("fun", "Fun")}`)
                  return message.channel.send(emb)
              }
              if(args[0] === "guild") {
                emb.setDescription(`${list("guild", "Guild")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "info") {
                emb.setDescription(`${list("info", "Info")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "roleplay") {
                emb.setDescription(`${list("roleplay", "Roleplay")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "gifs") {
                emb.setDescription(`${list("gifs", "Gifs")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "moderation") {
                emb.setDescription(`${list("moderation", "Moderation")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "utilities") {
                emb.setDescription(`${list("utilities", "Utilities")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "images") {
                emb.setDescription(`${list("images", "Images")}`)
                return message.channel.send(emb)
              }
              if(args[0] === "user") {
                emb.setDescription(`${list("user", "User")}`)
                return message.channel.send(emb)
              }
                        })
            
    }
}