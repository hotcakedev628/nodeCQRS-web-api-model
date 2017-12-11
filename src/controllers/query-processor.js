
const db = require('../database/db-ctrl')

async function getAccountDetailsById(req, res, next) {

    try {
        const account = await db.getAccountDetailsById(req.params.id)
        if (!account) return res.status(400).json({ error: 'No account found with this id' })
        return res.status(200).json(account)
    } catch (err) {
        switch (err.name) {
            case 'CastError':
                return res.status(400).json({ error: 'This id is not identifiable' })
            default: return res.status(500).json(err)
        }
    }

}

module.exports = {
    getAccountDetailsById
}