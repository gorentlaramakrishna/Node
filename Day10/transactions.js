let express = require('express');

let transaction = express.Router();

transaction.post('/transactions', (req,res) => {
    res.status(200).send ({"message" : "Welcome to Transactions API"});
});

module.exports = transaction;