import {MongoClient} from "mongodb";

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    

    console.log("Sucessfully connnected to Mongo");

}catch(err){
    console.log(err);
}


let db = conn.db("project_management");

export default db;