const express = require('express');
const bodyParser = require('body-parser');

// var {mongoose} = require('mongoose');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to library api');
});

app.post('/book', (req, res) => {
    var title = req.body.title;
    var barcode = req.body.barcode;
    res.send({
        title,
        barcode
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});
