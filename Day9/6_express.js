let express = require('express');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : false}))

let auth = (req,res,next) => {
    let headers = req.headers;
    if (headers.token === "12345") {
        next(); 
    }else {
        res.json({ login: "failed" });
    }
}

app.post ('/login', [auth], (req,res) => {
    if (req.body.uname === "admin" && req.body.upwd === "12345" ) {
        res.status(200).send ({ login: "successful" });
    } else {
        res.status(401).send ({ login: "failed" });
    }
});

app.listen(8001, () => {
    console.log('Server is listening on port 8001');
});