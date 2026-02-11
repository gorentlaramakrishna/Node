let http = require ('http');

let server = http.createServer ((req,res) => {
    res.write ('hello');
    res.end();

});

server.listen(8080);
console.log("server is listening on port 8080");