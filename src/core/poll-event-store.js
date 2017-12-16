// const eventEmitter = require('events').EventEmitter
const mongodb = require('mongodb')
const dealWithEventSavedInEventStore = require('./event-handler-orchestrator').dealWithEventSavedInEventStore
const currentCursorFs = require('./current-cursor-fs')
const mongoCursorOptions = require('./mongo-cursor-options')






async function poll() {
    let currentCursor = await currentCursorFs.read()
    const db = await mongodb.MongoClient.connect(process.env.mongodbEventStoreTestURI, {promiseLibrary: Promise})
    const collection = await db.db('accounts-event-store-test').collection('events')
    let latest, stream
    if(currentCursor) latest = await collection.find({ _id: mongodb.ObjectID(currentCursor) }).sort({ $natural: 1 }).limit(1).nextObject()
    else latest = await collection.find({}).sort({ $natural: 1 }).limit(1).nextObject()
    if(!latest)  stream = collection.find({  }, mongoCursorOptions).stream()
    else stream = collection.find({ _id: { $gt: latest._id } }, mongoCursorOptions).stream()
    stream.on('data', async e => {
        dealWithEventSavedInEventStore(e)
        currentCursor = e._id
        await currentCursorFs.write(e._id)
    })
        
}



module.exports = { poll }
