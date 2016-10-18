//Setting Up
var express  = require('express');
var app      = express();

//Configuration
app.use(express.static(__dirname + '/'));
app.get('*', function(req, res) {
    res.sendfile('index.html');
});

//Starts the app
app.listen(8080);
console.log("Running  localhost:8080");