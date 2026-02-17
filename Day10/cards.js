let express = require('express');

let cards = express();

let auth = (req,res,next) => {
    let headers = req.headers;
    if (headers.token1 === "12345") {
        next();
    } else {
        res.send ({ login: "failed" });
    }
}

let auth1= (req,res,next) => {
    let headers = req.headers;
    if (headers.token2 === "hello") {
        next();
    } else {
        res.send ({ login: "failed" });
    }
}
cards.post('/cards', [auth,auth1], (req,res) => {
    res.status(200).send ({"message" : "Welcome to Cards API"});
});

module.exports = cards;