const busEventEmitter = require('../messaging/events-queue').eventEmitter
const events = require('../config/events.constants')
const db = require('../database/db-ctrl')

busEventEmitter.on(events.domainEvents.accountAddressUpdated, async body => {
    await db.updateAccountAddress(body.aggregateId, body.payload.addressLine1, body.payload.addressLine1,
        body.payload.addressLine2, body.payload.city, body.payload.postcode,
        body.payload.state, body.payload.countryName)
})


busEventEmitter.on(events.domainEvents.accountApproved, async body => {
    await db.approveAccount(body.aggregateId, body.payload.approvedBy)
})


busEventEmitter.on(events.domainEvents.accountCreated, async body => {
    console.log('dsds')
    
    const l = await db.saveNewAccount(body.aggregateId, body.payload.accountNumber, body.businessName)
    console.log(l)
    
})


busEventEmitter.on(events.domainEvents.accountDeleted, async body => {
    await db.deleteAccount(body.aggregateId)
})


busEventEmitter.on(events.domainEvents.systemTagAdded, async body => {
    console.log('sssss')
    await db.addSystemTag(body.aggregateId, body.payload.name, body.payload.appliesToExpenses, body.payload.appliesToTimesheets)
})

module.exports = {}
