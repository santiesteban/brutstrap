// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var lessMiddleware = require("less-middleware");
var path = require('path');
 
app.use(lessMiddleware('/less', {
  dest: '/css',
  pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(path.join(__dirname, 'public')));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('/tmp'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/bootstrap.html", function (request, response) {
  response.sendFile(__dirname + '/views/bootstrap.html');
});

app.get("/demo.html", function (request, response) {
  response.sendFile(__dirname + '/views/demo.html');
});

app.get("/demo-bootstrap.html", function (request, response) {
  response.sendFile(__dirname + '/views/demo-bootstrap.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
