module.exports = {
    name: "number",
    public: true,
    description: "Выдаёт случайное число",
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send(`Укажите первое число`)
        if(!args[1]) return message.channel.send(`Укажите второе число`)
        if(isNaN(args[0]) || isNaN(args[1])) return message.channel.send(`Как минимум, здесь есть 1 не число`)
        message.channel.send(`Выпало число: ${getRandomInt(args[0], args[1])}`)
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }