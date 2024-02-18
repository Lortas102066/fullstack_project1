import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = "mitsukimorinaga"
const mongo_password = "Morinaga0809"
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.jnlrzlv.mongodb.net/`;

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})

.then(async Client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`);    
    })
})