var db = require("../models");

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({}).then(function (results) {
      res.json(results);
    });
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
};
