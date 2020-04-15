let {MessageEmbed} = require("discord.js");

module.exports = (client, message) => {
  try{
    if(message.author.bot) return;
    if(message.channel.type == 'dm') return;
      User.findOne({guildID: message.guild.id, userID: message.author.id}, (err,res) => {
      if(err) return 
      if(!res){
        let user = new User({guildID: message.guild.id, userID: message.author.id})
        user.save()
      }else{
        let random = Math.floor(Math.random() * 5)
        res.money += random
        res.xp++
        res.messages++
        res.save()
  
        if(res.xp >= config.upXP){
          let embed = new Discord.MessageEmbed()
          .setColor(config.color)
          .setDescription(`[:tada:] Поздравим **${message.author.username}** с новым уровнем!`)
          message.channel.send(embed)
          res.xp -= config.upXP;
          res.level+=1
          res.save()
        }
      }
    })
    Guild.findOne({guildID: message.guild.id}, (err,res) => {
      if(err) return 
      if(!res){
        let guild = new Guild({guildID: message.guild.id})
        guild.save()
      }else{
        if (!message.content.startsWith(res.prefix)) return;
        const args = message.content.slice(res.prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        const command = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
        if(!require('../../config.json').owner.includes(message.author.id) && command.public === false) return;
        command.run(client, message, args);
      }
    }
    )
  } catch(e) {
    console.error(e)
  }
}