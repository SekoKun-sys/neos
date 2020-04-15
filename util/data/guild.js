const schema = mongoose.Schema({
    guildID: String,
    prefix: {type:String,default:"_"}
})

module.exports = mongoose.model(`Guild`, schema)