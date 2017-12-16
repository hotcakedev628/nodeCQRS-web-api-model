const accountModel = require('./models/account-details.model')
const systemTagModel = require('./models/system-tag.model')

async function saveNewAccount(accountId, accountNumber, businessName) {
    const newAccount = new accountModel({ accountId, accountNumber, businessName })
    return await newAccount.save().catch(err => { throw err })
}

async function addSystemTag(accountId, name, appliesToExpenses, appliesToTimesheets) {
    const newSystemTag = new systemTagModel({ accountId, name, appliesToExpenses, appliesToTimesheets })
    return newSystemTag.save().catch(err => { throw err })
}


async function deleteAccount(accountId) {
    return await accountModel.remove({ accountId }).exec().catch(err => { throw err })
}



async function updateAccountAddress(accountId, { addressLine1, addressLine2, city, postcode, state, countryName }) {
    return await accountModel.findOneAndUpdate({ accountId }, { $set: { addressLine1, addressLine2, city, postcode, state, countryName } }, { new: true }).exec()
        .catch(err => { throw err })
}



async function approveAccount(accountId, approvedBy) {
    return await accountModel.findOneAndUpdate({ accountId }, { $set: { approvedBy, isApproved: true } }, { new: true }).exec().catch(err => { throw err })
}


async function getAccountDetailsById(accountId) {
    return await accountModel.findOne({ accountId }).lean().exec().catch(err => { throw err })
}

module.exports = {
    saveNewAccount, addSystemTag, deleteAccount, updateAccountAddress, approveAccount, getAccountDetailsById
}