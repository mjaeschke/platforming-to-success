function saveScore(username, score) {
  $.post("/api/scores", {
    username: username,
    score: score,
  }).then(function () {
    alert("You died. GG");
    return;
  });
}
