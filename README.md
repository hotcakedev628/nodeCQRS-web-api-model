db.getCollection('accountdetails').dropIndex({id:1})
db.getCollection('accountdetails').ensureIndex({accountId: 1}, {unique: true});

For accountDetails model
schema.set('autoIndex', false);


This database is idempotent