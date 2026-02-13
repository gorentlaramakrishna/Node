let express = require('express');

let app = express();     

let auth = (req,res,next) => {
    let headers = req.headers;
    if (headers.token === "12345") {
        next();
    }else {
        res.json({ login: "failed" });
    }
};

app.get ( '/login', [auth],(req,res) => {
    if (req.query.uname === "admin" && req.query.upwd === "12345") {
        res.json({ login: "successful" });
    } else {
        res.json({ login: "failed" });
    }
});

app.get ('/', (req,res) => {
 res.sendFile(__dirname + '/index.html');
});

app.listen(8000, () => {    
    console.log('Server is listening on port 8000');
});
