let express = require ('express');

let mongodb = require('mongodb');

let RamuClient = mongodb.MongoClient;

let insert = express.Router();

insert.post('/insert', (req,res) => {
    RamuClient.connect("mongodb://127.0.0.1:27017",(err,Connection) => {
        if (err) {
            res.status(501).send({"message" : "error"});
        } else {
            let db = Connection.db("RamuDB");
    db.collection ("RamuCollection").insertOne({
        "id" : req.body.id,
        "name" : req.body.name,
        "age" : req.body.age},(err,result) => {
                if (err) {
                    res.status(500).send({"message" : "error"});
                } else {
                    res.send(result);
                }   
            })
        }
    });
});


module.exports = insert;