
const db = require('../database/db-ctrl')
const logger = require('../services/logging-query-decorator').queryLogger
const checkForError = require('./response-error-finder').checkForError

async function getAccountDetailsById(req, res, next) {
    try {
        const account = await logger(async () => await db.getAccountDetailsById(req.params.id), 'get Account details')()
        if (!account) return res.status(400).json({ error: 'No account found with this id' })
        return res.status(200).json(account)
    } catch (err) { checkForError(res, err) }
}



module.exports = {
    getAccountDetailsById
}