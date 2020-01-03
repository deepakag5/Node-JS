// create package.json using command - npm init
// also install the module express using command - npm install express --save

// reference the express module
const express = require('express');

// create an app
const app = express();

// add a route
app.get('/', (req, res) => {
    res.send("Hello World, this is nodejs web server !");
});

// specify the port
app.listen(3000, () => {
    console.log("Web server listening on port 3000 !");
})

// finally to launch the web server run the command - node server.js