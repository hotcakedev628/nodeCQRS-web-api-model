const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema();

module.exports = mongoose.model('SystemTag', schema);