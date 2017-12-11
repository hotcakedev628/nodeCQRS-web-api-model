const accountModel = require('./models/account-details.model')
const systemTagModel = require('./models/system-tag.model')


async function saveNewAccount (id, accountNumber, businessName) {
    const newAccount = new accountModel({ id, accountNumber, businessName })
    return await newAccount.save.catch(err=> {throw Error(err)})
}

async function addSystemTag(accountId, name, appliesToExpenses, appliesToTimesheets) {
    const newSystemTag = new systemTagModel({ accountId, name, appliesToExpenses, appliesToTimesheets })
    return newSystemTag.save.catch(err=> {throw Error(err)})
}


function deleteAccount(payload, data) {
    return accountModel.findOneAndUpdate({ _id: payload.id }, { data }).exec().catch(err=> {throw Error(err)})
}



async function updateAccountAddress(id, addressLine1, addressLine2, city, postcode, state, countryName) {
    return await accountModel.findOneAndUpdate({ id }, { $set: { addressLine1, addressLine2, city, postcode, state, countryName } }).exec()
    .catch(err=> {throw Error(err)})
}



function approveAccount(id, approvedBy) {
    return accountModel.findOneAndUpdate({ id }, { $set: { approvedBy, isApproved: true } }).exec().catch(err=> {throw Error(err)})
}


async function getAccountDetailsById(id){
    return await accountModel.findById(id).lean().exec().catch(err=> {throw Error(err)})
}


module.exports = {
    saveNewAccount, addSystemTag, deleteAccount, updateAccountAddress, approveAccount, getAccountDetailsById
}