var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var PORT = 3000;

// Database Configuration
var mongojs = require('mongojs');
var databaseUrl = "scraper";
var collections = ["scrapedData"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log("Database Error: ", err);
});

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});