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
  response.sendFile(__dirname + '/views/docs-css.html');
});


app.get("/components/", function (request, response) {
  response.sendFile(__dirname + '/views/docs-components.html');
});

app.get("/demo/", function (request, response) {
  response.sendFile(__dirname + '/views/demo-home.html');
});

app.get("/demo/2/", function (request, response) {
  response.sendFile(__dirname + '/views/demo-detail.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
