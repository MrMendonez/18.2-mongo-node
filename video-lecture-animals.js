var express = require("express");
var app = express();
var PORT = 8080;
var mongojs = require('mongojs')
var db = mongojs("zoo", ["animals"])
db.on('error', function(err) {
  console.log("database error: " + err);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
})

app.get('/animals', function(req, res) {
  db.animals.find({}, function(err, documents) {
    if(err) {
      console.log(err);
    } 
    else {
      res.json(documents);
    }
  })
})

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});