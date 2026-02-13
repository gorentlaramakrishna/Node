let express = require('express');

let router = express.Router();

router.get('/', (req,res) => {
    res.send('This is an accounts page');
});

router.post('/p', (req,res) => {
    res.send('This is a post request');
}); 


module.exports = router;
