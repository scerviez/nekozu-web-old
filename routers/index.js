const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/s', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.post('/search', function (req, res) {
    var name = req.body.query + ' ';
    
    res.send(name + ' Submitted Successfully!');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
