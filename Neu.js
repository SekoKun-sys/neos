const {Collection, Client} = require("discord.js");
const client = new Client()
client.commands = new Collection()
client.aliases = new Collection()
const mongoose = require("mongoose");
const config = require("./config.json")
global.config = require("./config.json");
global.mongoose = require("mongoose");
global.User = require("./util/data/user");
global.Guild = require("./util/data/guild");

mongoose.connect(config.dataURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


require("./handlers/command")(client)
require("./handlers/event")(client)

client.login(config.token)