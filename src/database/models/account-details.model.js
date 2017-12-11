const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schema = new Schema({
    id: { type: String, required: true, unique: true },
    businessName: { type: String, required: true },
    accountNumber: { type: Number, required: true,},
    addressLine1: { type: String},
    addressLine2: { type: String },
    city: { type: String},
    postcode: { type: String},
    state: { type: String},
    countryName: { type: String},
    isApproved: {type: Boolean},
    approvedBy: {type: String}
});



module.exports = mongoose.model('AccountDetails', schema);