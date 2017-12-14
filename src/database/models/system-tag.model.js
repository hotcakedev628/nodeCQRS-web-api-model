const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    accountId: { type: String, required: true,},
    name: { type: String, required: true,},
    appliesToExpenses: { type: Boolean, required: true },
    appliesToTimesheets: { type: Boolean, required: true, },
});



module.exports = mongoose.model('SystemTag', schema);