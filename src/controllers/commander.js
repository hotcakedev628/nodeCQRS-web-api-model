const bus = require('../messaging/sendMessage')
const commands = require('../config/commands.constants')
module.exports = {
    createAccount(req, res, next) {
        sendCommand(req.body, res, next, commands.createAccount)
    },
    deleteAccount(req, res, next) {
        sendCommand(req.body, res, next, commands.deleteAccount)
    },
    reinstateAccount(req, res, next) {
        sendCommand(req.body, res, next, commands.reinstateAccount)
    },
    updateAccountAddress(req, res, next) {
        sendCommand(req.body, res, next, commands.updateAccountAddress)
    },
    approveAccount(req, res, next) {
        sendCommand(req.body, res, next, commands.approveAccount)
    },
    
}

async function sendCommand(payload, res, next,commandName) {
    bus.send(commandName, payload)
    .then((x)=>res.status(202).json(x))
    .catch(err => res.status(400).json(err))
    // if (result) return 
}