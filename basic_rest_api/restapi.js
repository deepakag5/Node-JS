// get the required packages
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// to parse the incoming request from express
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Hello Rest API!");
});

app.post('/hello', (req, res) => {
    let body = req.body;
    body.message = "Hello " + body.name;

    // send json back as response
    res.json(body);
});

