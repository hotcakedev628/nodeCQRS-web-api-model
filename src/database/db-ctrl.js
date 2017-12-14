const accountModel = require('./models/account-details.model')
const systemTagModel = require('./models/system-tag.model')


async function saveNewAccount (id, accountNumber, businessName) {
    const newAccount = new accountModel({ id, accountNumber, businessName })
    return await newAccount.save().catch(err=> {throw err})
}

async function addSystemTag(accountId, name, appliesToExpenses, appliesToTimesheets) {
    const newSystemTag = new systemTagModel({ accountId, name, appliesToExpenses, appliesToTimesheets })
    return newSystemTag.save().catch(err=> {throw err})
}


async function deleteAccount(id) {
    return await accountModel.remove({id}).exec().catch(err => { throw err })
}



async function updateAccountAddress(id, {addressLine1, addressLine2, city, postcode, state, countryName}) {
    return await accountModel.findOneAndUpdate({ id }, { $set: { addressLine1, addressLine2, city, postcode, state, countryName } }, {new: true} ).exec()
    .catch(err=> {throw err})
}



async function approveAccount(id, approvedBy) {
    return await accountModel.findOneAndUpdate({ id }, { $set: { approvedBy, isApproved: true } }, {new: true}).exec().catch(err=> {throw err})
}


async function getAccountDetailsById(id){
    return await accountModel.findOne({id}).lean().exec().catch(err=> {throw err})
}


module.exports = {
    saveNewAccount, addSystemTag, deleteAccount, updateAccountAddress, approveAccount, getAccountDetailsById
}