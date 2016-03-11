var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "scraper";
var collections = ["scrapedData"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});


app.get('/', function(req, res) {
  request('https://www.reddit.com/', function (error, response, html) {
   var $ = cheerio.load(html);
   var result = [];
   $(".title").each(function(i, element){

     //scrape some stuff, put it in an object and add it to the result array

     var title = $(this).text();
     var link = $(element).children().attr('href');

     result.push({
       title: title,
       link: link
     })

     });
   console.log(result);
  });
});

app.listen(3000, function() {
  console.log('App running on port 3000!');
});