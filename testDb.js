var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://vasubabu:babuvasu19@teamindoor-shard-00-00-8k6fh.mongodb.net:27017,teamindoor-shard-00-01-8k6fh.mongodb.net:27017,teamindoor-shard-00-02-8k6fh.mongodb.net:27017/test?ssl=true&replicaSet=Teamindoor-shard-0&authSource=admin', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
