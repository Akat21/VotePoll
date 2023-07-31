import { MongoClient } from "mongodb"
import './loadEnvironment.mjs'

let dbConnection

export const connectToDb = (cb) =>{
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

export const getDb = () =>{
    return dbConnection
}