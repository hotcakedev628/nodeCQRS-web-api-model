// const eventEmitter = require('events').EventEmitter
const mongodb = require('mongodb')
const dealWithEventSavedInEventStore = require('./event-handler-orchestrator').dealWithEventSavedInEventStore
const currentCursorFs = require('./current-cursor-fs')
const mongoCursorOptions = require('./mongo-cursor-options')
const interval = 10
let currentIterator = 0

let currentCursor
async function setCursor(_id) {
    currentCursor = _id


    if (++currentIterator >= interval) {
        console.log(currentCursor)
        await currentCursorFs.write(_id).then(x => {
            currentIterator = 0
            console.log(x)

        }).catch(err => console.log(err))
    }
}






async function poll() {
    currentCursor = await currentCursorFs.read()
    const db = await mongodb.MongoClient.connect(process.env.mongodbEventStoreTestURI, {promiseLibrary: Promise})
    const collection = await db.db('accounts-event-store-test').collection('events')
    let latest
    if(currentCursor) latest = await collection.find({ _id: mongodb.ObjectID(currentCursor) }).sort({ $natural: 1 }).limit(1).nextObject()
    else latest = await collection.find({}).sort({ $natural: 1 }).limit(1).nextObject()
    const stream = collection.find({ _id: { $gt: latest._id } }, mongoCursorOptions).stream()
    stream.on('data', async e => await setCursor(e._id))
    stream.on('data', dealWithEventSavedInEventStore)
        
}



module.exports = { poll }
