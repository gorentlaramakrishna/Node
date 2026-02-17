let express = require('express');

let accounts = express.Router();

accounts.get('/', (req,res) => {
    res.status (200).send ({"message" : "Welcome to Accounts API"});
});


accounts.get('/login', (req,res) => {
    if (req.query.uname === "admin" && req.query.upwd === "12345") {
        res.status(200).send ({ login: "successful" });
    } else {
        res.status(401).send ({ login: "failed" });
    }   
});

module.exports = accounts;