// express is a module

// express is a framework used to develop the rest services

let express = require ('express');

let app = express();  //creates the rest object

app.get('/', (req,res) => {
    res.status(200).json({message : 'Hello world'});
});

app.get ('/demo',(req,res) => {
    res.status(201).json({message : "this is a demo page"})
});

app.post('/', (req,res) => {
    res.status(200).json({message : 'Hello world'});
})

app.post('/demo',(req,res) => {
    res.send('this is a client req headers')
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})