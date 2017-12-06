const accountModel = require('../models/accounts.model')

function getAccountDetailsById(id){
    return accountModel.findById(id).lean().exec()
}

module.exports = { getAccountDetailsById}