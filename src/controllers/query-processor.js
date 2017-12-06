
const query = require('../query/getAccountDetailsById')

function getAccountDetailsById(req, res, next) {
    return query.getAccountDetailsById(req.params.id)
        .then(account => res.status(200).json(account))
        .catch(err => res.status(400).json(err))
}

module.exports = {
    getAccountDetailsById
}