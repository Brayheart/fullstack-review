const express = require('express');
const bodyParser= require('body-parser') //<-- why is this needed
const save = require('../database/index')
let app = express();

// UNCOMMENT FOR ANGULARJS
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules/angular'));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({extended: true}))

app.post('/repos', function(req, res) {
  console.log('here', req.body)
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  save();
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});