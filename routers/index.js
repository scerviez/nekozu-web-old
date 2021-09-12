var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/s', function (req, res) {
    res.sendFile('index.html');
});

app.post('/search', function (req, res) {
    var name = req.body.query + ' ';
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
