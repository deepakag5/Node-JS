// get the required packages
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// to parse the incoming request from express
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Hello Express!")
})

app.post('/hello', (req, res) => {

})