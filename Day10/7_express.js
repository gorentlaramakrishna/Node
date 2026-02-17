let express = require('express');

let accounts = require ('./accounts.js');
let cards = require ('./cards.js');
let transactions = require ('./transactions.js');


let app = express();

app.use('/accounts', accounts);
app.use('/cards', cards);
app.use('/transactions', transactions); 

app.listen(8001, () => {
    console.log('Server is listening on port 8001');
});
