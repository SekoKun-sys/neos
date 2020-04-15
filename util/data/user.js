const schema = mongoose.Schema({
    userID: String,
    guildID: String,
    xp: {type:Number,default:0},
    lvl: {type:Number,default:0},
    messages: {type:Number,default:0}
})

module.exports = mongoose.model(`User`, schema)