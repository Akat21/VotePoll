const { MongoClient } = require("mongodb");
require('./loadEnvironment.js');

let dbConnection

const connectToDb = (cb) =>{
    MongoClient.connect(`${process.env.MONGO_DB_URI}`)
    .then((client) => {
        dbConnection = client.db('VotePollDB')
        return cb()
    })
    .catch((err) => {
        console.log(err)
        return cb(err)
    })
}

const getDb = () =>{
    return dbConnection
}

module.exports = {
    connectToDb,
    getDb,
};