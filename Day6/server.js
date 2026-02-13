import express from 'express';
import transaction from './transaction.js';
import accounts from './accounts.js';

const app = express();

app.use('/module1', transaction);
app.use('/module2', accounts);

app.listen(9000, () => {
    console.log('Server is listening on port 9000');
});
