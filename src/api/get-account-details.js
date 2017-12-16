
const db = require('../database/db-ctrl')
const logger = require('../services/logging-query-decorator').queryLogger
const checkError = require('./response-error-finder')

async function getAccountDetailsById(req, res, next) {
    try {
        const account = logger(async () => await db.getAccountDetailsById(req.params.id), 'get Account details')()
        if (!account.id) return res.status(400).json({ error: 'No account found with this id' })
        return res.status(200).json(account)
    } catch (err) { checkError(err) }
}



module.exports = {
    getAccountDetailsById
}