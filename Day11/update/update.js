let express = require('express');
let mongodb = require('mongodb');

let RamuClient = mongodb.MongoClient;

let update = express.Router();

update.put('/update', (req, res) => {

    RamuClient.connect("mongodb://127.0.0.1:27017", (err, connection) => {

        if (err) {
            return res.status(500).send({ message: "Database connection error" });
        }

        let db = connection.db("RamuDB");

        db.collection("RamuCollection").updateOne(
            { id: req.body.id },
            {
                $set: {
                    name: req.body.name,
                    age: req.body.age
                }
            },
            (err, result) => {

                if (err) {
                    return res.status(500).send({ message: "Update error" });
                }

                res.status(200).send(result);
                connection.close();   // always close connection
            }
        );
    });
});

module.exports = update;
