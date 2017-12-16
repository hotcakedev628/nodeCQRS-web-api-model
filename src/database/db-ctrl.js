const accountDetailsReadModel = require('./models/account-details.model')

async function getAccountDetailsById(accountId) {
    return await accountDetailsReadModel.findOne({ accountId }).lean().exec().catch(err => { throw err })
}

module.exports = {getAccountDetailsById}