const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    businessName: { type: String, required: true },
    AccountNumber: { type: Number, required: true,},
    AddressLine1: { type: String, required: true },
    AddressLine2: { type: String, required: true, },
    City: { type: String, required: true },
    Postcode: { type: String, required: true },
    State: { type: String, required: true },
    CountryName: { type: String, required: true },
});



module.exports = mongoose.model('Accounts', schema);