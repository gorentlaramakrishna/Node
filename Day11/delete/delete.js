let express = require('express');

let mongodb = require('mongodb');

let RamuClient = mongodb.MongoClient;

let deleteRouter = express.Router();

deleteRouter.delete('/delete', (req,res) => {
    RamuClient.connect("mongodb://127.0.0.1:27017",(err,result) => {
        if (err) {
            res.status(500).send({"message" : "error"});
        } else {
            let db = result.db("RamuDB");
            db.collection("Ramucollection").deleteOne({"id": req.body.id}, (err,result) => {
                if (err) {
                    res.status(500).send({"message" : "error"});
                } else {
                    res.send(result);
                }       
            })
        }
    })
});

module.exports = deleteRouter;