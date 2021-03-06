const path = require("path");
var exphbs = require("express-handlebars");
const express = require("express");
var User = require("../models/user.js");
var db = require("../models");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", isAuthenticated, function (req, res) {
    res.render("index");
  });

  app.get("/help", function (req, res) {
    res.render("help");
  });

  app.get("/leaderboards", function (req, res) {
    var hbsObject = {};
    db.Score.findAll({
      raw: true,
      order: [["score", "DESC"]],
      limit: 15,
    }).then(function (results) {
      hbsObject = {
        scores: results,
      };
      hbsObject.scores.slice(0, 3);

      res.render("leaderboard", hbsObject);
      // res.json(results);
    });
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/welcome", isAuthenticated, function (req, res) {
    res.render("welcome");
  });
};
