let express = require('express');
let cookies = require('cookie-parser');

let app = express();

app.use(cookies());

app.get('/set', (req,res) => {
    res.cookie("name" , "Ramu");
    res.cookie("age" , "25");
    res.cookie("city" , "Hyderabad", {maxAge : 60000});
    res.send("Cookies are set");
});


app.get('/get', (req,res) => {
    res.send (req.cookies);
});

app.get('/clear', (req,res) => {
    res.clearCookie("name");
    res.clearCookie("age");
    res.send("Cookies are cleared");
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


// with pug module we can show node as frontend data running on port 8000.