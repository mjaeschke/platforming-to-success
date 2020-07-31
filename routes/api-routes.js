var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
    // console.log("maybe?? please fucking god " + req.user.username);
  });

  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's username and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    }
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/users/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/scores", function (req, res) {
    db.Score.create({
      username: req.body.username,
      score: req.body.score,
    });
    // .then(function () {
    //   res.redirect("/");
    // });
    // .catch(function (err) {
    //   res.status(401).json(err);
    // });
  });
};
