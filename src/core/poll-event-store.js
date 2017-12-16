// const eventEmitter = require('events').EventEmitter
const mongodb = require('mongodb')
const dealWithEventSavedInEventStore = require('./event-handler-orchestrator').dealWithEventSavedInEventStore
const currentCursorFs = require('./current-cursor-fs')
const mongoCursorOptions = require('./mongo-cursor-options')






async function poll() {
    let currentCursor = await currentCursorFs.read()
    const db = await mongodb.MongoClient.connect(process.env.mongodbEventStoreURI, {promiseLibrary: Promise})
    const collection = await db.db('accounts-event-store').collection('events')
    let query, streamQuery
    if (currentCursor) {
        query = { _id: mongodb.ObjectID(currentCursor) }
    } else {
        query = { }
    }
    const latest = await collection.find(query).sort({ $natural: 1 }).limit(1).nextObject()
    if (currentCursor) {
        streamQuery = { _id: { $gt: latest._id } }
    } else {
        streamQuery = { _id: { $gte: latest._id } }
    }
    const stream = collection.find(streamQuery, mongoCursorOptions).stream()
    stream.on('data', async e => {
        dealWithEventSavedInEventStore(e)
        currentCursorFs.write(e._id)
    })
        
}
module.exports = { poll }
