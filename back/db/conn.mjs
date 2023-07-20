import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_DB_URI || ""

const client = new MongoClient(connectionString)

let conn;
try{
    conn = await client.connect()
} catch(e) {
    console.log(e)
}

let db = conn.db("Cluster0")

export default db