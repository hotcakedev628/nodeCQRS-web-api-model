const setupApi = require('./api/setup').setup
const pollEventStore = require('./core/poll-event-store').poll

const api = setupApi()

pollEventStore()


module.exports = api;

