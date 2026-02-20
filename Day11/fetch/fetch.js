let express = require('express');

let mongodb = require('mongodb');

let RamuClient = mongodb.MongoClient;

let fetch = express.Router();

fetch.get('/fetch', (req,res) => {
    RamuClient.connect("mongodb://127.0.0.1:27017",(err,connection)=> {
        if (err) {
            res.status(500).send({"message" : "error"});
        } else {
            let db = connection.db("RamuDB");
            db.collection("Ramucollection").find().toArray((err,result)=> {
                if (err) {
                    res.status(500).send({"message" : "error"});
                } else {
                    res.send(result);
                }
            })
        }
    })
});

module.exports = fetch;