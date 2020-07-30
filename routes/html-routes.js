const path = require("path");
var exphbs = require("express-handlebars");
const express = require("express");
var User = require("../models/user.js");
var db = require("../models");

module.exports = function (app) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

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
      order: [["score", "DESC"]],
      limit: 10,
    }).then(function (results) {
      hbsObject = {
        scores: results,
      };
      hbsObject.scores.slice(0, 3);
      console.log(hbsObject);
      res.render("leaderboard", hbsObject);
      // res.json(results);
    });
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/createaccount", function (req, res) {
    res.render("createaccount");
  });
};
