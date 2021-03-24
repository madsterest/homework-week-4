var backButton = document.querySelector(".back-btn");
var clearButton = document.querySelector(".clear-button");
var highscoreEl = document.querySelector(".highscore-list");
var currentScore = JSON.parse(localStorage.getItem("finalScore"));
var scores = [];

function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  addScore();
}

function addScore() {
  scores.push(currentScore);
  renderScore();
  storeScores();
}

function renderScore() {
  for (var i = 0; i < scores.length; i++) {
    var scoreEl = document.createElement("li");
    scoreEl.textContent = scores[i].initials + ":" + scores[i].finalScore;
    highscoreEl.appendChild(scoreEl);
  }
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

backButton.addEventListener("click", function () {
  window.localStorage.removeItem("finalScore");
  window.location.href = "./index.html";
});

clearButton.addEventListener("click", function () {
  window.localStorage.removeItem("scores");
  window.localStorage.removeItem("finalScore");
  highscoreEl.textContent = "";
});

init();
