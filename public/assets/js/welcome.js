$(document).ready(function () {
  // var button = $("#testbutton");
  // button.click(function loggedIn(req, res, next) {
  //   console.log(req.user);
  // });

  $.get("/api/user_data").then(function (data) {
    $("#member-name").text(data.username);
    // console.log("here is what we are looking for: " + data.username);
    // console.log(data.username);
  });
});
