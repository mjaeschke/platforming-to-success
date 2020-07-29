const path = require("path");
var exphbs = require("express-handlebars");
const express = require("express");
var User = require("../models/user.js");
var db = require("../models");

module.exports = function (app) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  //   app.use(
  //     express.static(path.join(__dirname, "./public/assets/css/style.css"))
  //   );

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/help", function (req, res) {
    res.render("help");
  });

  app.get("/leaderboards", function (req, res) {
    var hbsObject = {};
    db.Score.findAll({
      raw: true,
      order: [["score", "ASC"]],
    }).then(function (results) {
      hbsObject = {
        scores: results,
      };
      // console.log(hbsObject);
      // console.log("here are the raw results: " + results[1].username);
      res.render("leaderboard", hbsObject);
      // res.json(results);
    });
  });
};
