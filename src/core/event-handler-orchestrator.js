const { handleAccountAddressUpdated, handleAccountApproved, handleAccountCreated, handleAccountDeleted, handleSystemTagAdded } = require('./event-handlers')
const eventConstants = require('../config/events.constants')



function dealWithEventSavedInEventStore(e) {
    switch (e.name) {
        case eventConstants.domainEvents.accountAddressUpdated: return handleAccountAddressUpdated(e)
        case eventConstants.domainEvents.accountApproved: return handleAccountApproved(e)
        case eventConstants.domainEvents.systemTagAdded: return handleSystemTagAdded(e)
        case eventConstants.domainEvents.accountDeleted: return handleAccountDeleted(e)
        case eventConstants.domainEvents.accountCreated: return handleAccountCreated(e)
        default:
            break;
    }
}

module.exports = { dealWithEventSavedInEventStore }