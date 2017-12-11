const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true },
    name: { type: Number, required: true,},
    appliesToExpenses: { type: String, required: true },
    appliesToTimesheets: { type: String, required: true, },
});



module.exports = mongoose.model('SystemTag', schema);