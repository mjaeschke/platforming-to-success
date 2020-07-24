const path = require("path");
var exphbs = require("express-handlebars");

module.exports = function (app) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/help", function (req, res) {
    res.render("help");
  });

  app.get("/leaderboard", function (req, res) {
    res.render("leaderboard");
  });

  //   app.get("/cms", function (req, res) {
  //     res.sendFile(path.join(__dirname, "../public/cms.html"));
  //   });

  //   app.get("/blog", function (req, res) {
  //     res.sendFile(path.join(__dirname, "../public/blog.html"));
  //   });

  //   app.get("/authors", function (req, res) {
  //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  //   });
};
