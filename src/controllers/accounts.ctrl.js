
const commands = require('../config/commands.constants')
module.exports = {
    createAccount(req, res, next) {
        defaultRespone(commands.createAccount)
    },
    deleteAccount(req, res, next) {
        defaultRespone(commands.deleteAccount)
    },
    reinstateAccount(req, res, next) {
        defaultRespone(commands.reinstateAccount)
    },
    updateAccountAddress(req, res, next) {
        defaultRespone(commands.updateAccountAddress)
    },
    approveAccount(req, res, next) {
        defaultRespone(commands.approveAccount)
    },
}

function defaultRespone(commandName) {
    await bus.send(defaultRespone).catch()
}