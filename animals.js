var express = require('express');
var mongojs = require('mongojs');
var app = express();
// set up db
var PORT = process.env.PORT || 3000;
var db = mongojs('zoo', ['animals']);
db.on('error', function(err) {
  console.error('Database error', err);
});

app.get('/', function(req, res) {
  res.send('You got animals!')
});

app.get('/animals', function(req, res) {
  db.animals.find({}, function(err, dbResults) {
    if(err) {
      throw err;
    }
    res.json(dbResults);
  });
});

app.get('/animals/weight', function(req, res) {
  db.animals.find().sort({weight:1},function(err,results) {
    res.json(results)
  })
});

app.get('/animals/name', function(req, res) {
  db.animals.find().sort({name:1},function(err,results) {
    res.json(results)
  })
});
app.get('/animals/numlegs',function(req,res){
  db.animals.find().sort({numlegs:1},function(err,results) {
    res.json(results)
  })
});
app.get('/animals/isMammal',function(req,res){
  db.animals.find().sort({class:'mammal'},function(err,results) {
    res.json(results)
  })
});

// Listening for request
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
