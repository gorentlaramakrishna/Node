let express = require('express');
let mongodb = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



let update = require('./update/update.js');
let insert = require('./insert/insert.js');
let deleteData = require('./delete/delete.js');
let fetch = require('./fetch/fetch.js');


app.use(express.json());

app.use('/update', update);
app.use('/insert', insert);
app.use('/delete', deleteData);
app.use('/fetch', fetch);

console.log("update:", typeof update);
console.log("insert:", typeof insert);
console.log("delete:", typeof deleteData);
console.log("fetch:", typeof fetch);


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
