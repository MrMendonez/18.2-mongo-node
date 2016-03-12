var express = require('express');
var app = express();
// request - the ability to make web requests
// scrapes - allows us to use jquery syntax to parse a lot of data
var request = require('request');
var cheerio = require('cheerio');
var PORT = 3000;

// Database Configuration
// Connection to mongo database and manipulate
var mongojs = require('mongojs');
var databaseUrl = "scraper";
var collections = ["scrapedData"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log("Database Error: ", err);
});

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.get("/scraper", function(req, res) {
  request('https://news.ycombinator.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      $('.title').each(function(i, element) {

        var title = $(this).children("a").text();
        var link = $(this).children("a").attr("href");

        if(title && link) {
          db.scrapedData.save({
            title: title,
            link: link
          }, function(err, saved) {
            if(err) {
              console.log(err);
            }
            else {
              console.log(saved);
            }
          })
        }

        console.log(element);
      });
    }
  })
  res.send("Scrape complete!");
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});