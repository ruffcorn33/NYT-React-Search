const axios = require("axios");
const db = require("../models/index.js");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Routes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
module.exports = function(app) {

  // query MongoDB for all saved articles
  app.get("/articles", function(req, res) {
    db.Article.find({
      saved: true
    })
    .then(function (dbArticle) {
      res.json(dbArticle);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  // save an article to the database
  app.post("/articles", function(req, res) {
    db.Article.findByIdAndUpdate({
      _id: req.params.id
    }, {
      saved: true
    })
    .then(function (dbArticle) {
      res.json(dbArticle);
    })
    .catch(function (err) {
      res.json(err);
    });
    
  });

  // delete a saved article in the database
  app.delete("/articles", function(req, res) {
    db.Article.remove({
      _id: req.params.id
    })
    .then(function (dbArticle) {
      res.json(dbArticle);
    })
    .catch(function (err) {
      res.json(err);
    });
    
  });

  // will load your single HTML page (with ReactJS) in client/build/index.html
  app.get("*", function(req, res) {

    
  });
}