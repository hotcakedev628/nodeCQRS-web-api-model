const bus = require('../aws/sendMessage')
const commands = require('../config/commands.constants')
module.exports = {
    createAccount(req, res, next) {
        defaultRespone(req.body, res, next, commands.createAccount)
    },
    deleteAccount(req, res, next) {
        defaultRespone(req.body, res, next, commands.deleteAccount)
    },
    reinstateAccount(req, res, next) {
        defaultRespone(req.body, res, next, commands.reinstateAccount)
    },
    updateAccountAddress(req, res, next) {
        defaultRespone(req.body, res, next, commands.updateAccountAddress)
    },
    approveAccount(req, res, next) {
        defaultRespone(req.body, res, next, commands.approveAccount)
    },
}

async function defaultRespone(payload, res, next,commandName) {
    const result = await bus.send(commandName, payload)
    if (result) return res.status(202).send('We accepeted your request. Please check again soon if everything is Ok')
    else return res.status(400).json('You could not perform this request')
}