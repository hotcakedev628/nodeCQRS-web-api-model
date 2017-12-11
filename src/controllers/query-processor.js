
const db = require('../database/db-ctrl')

async function getAccountDetailsById(req, res, next) {
    try {
        const account =  await db.getAccountDetailsById(req.params.id)
        return res.status(200).json(account)
    } catch(err) {  return res.status(500).json(err)   }
    
}

module.exports = {
    getAccountDetailsById
}