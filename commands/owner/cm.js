module.exports = {
    name: "cm",
    public: false,
    run: async (client, message, args) => {
        let con = args.slice(1).join(" ")
        if(!args[0]) return
        if(!con) return
        client.channels.cache.get(`${args[0]}`).send(con)
        message.channel.send(`Сообщение \`${con}\` отправилось в канал ${        client.channels.cache.get(`${args[0]}`).name}`)
    }
}