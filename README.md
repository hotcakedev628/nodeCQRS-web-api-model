db.getCollection('accountdetails').dropIndex({id:1})

For accountDetails model
schema.set('autoIndex', false);
