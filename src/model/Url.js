const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortCode: String,
    longUrl: String
})

const Url = new mongoose.model('Url', urlSchema);

module.exports = Url