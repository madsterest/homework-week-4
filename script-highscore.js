var backButton = document.querySelector(".back-btn");
var clearButton = document.querySelector(".clear-button");
var highscoreEl = document.querySelector(".highscore-list");
var currentScore = JSON.parse(localStorage.getItem("finalScore"));
var scores = [];

//Gets the saved scores from the local storage. If there are no previous scores, the function doesn't run. Otherwise the saved scores get added to the empty scores array.
function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    scores = storedScores;
  }
  addScore();
}
//Adds the most recent score to the score array
function addScore() {
  scores.push(currentScore);
  renderScore();
  storeScores();
}

//Loops through the scores array and generates a list that displays the highscores initials and the score.
function renderScore() {
  for (var i = 0; i < scores.length; i++) {
    var scoreEl = document.createElement("li");
    scoreEl.textContent = scores[i].initials + ":" + scores[i].finalScore;
    highscoreEl.appendChild(scoreEl);
  }
}
//Saves the new scores array to local storage

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}
//Goes back to quiz and removes the "current score" from local Storage
backButton.addEventListener("click", function () {
  window.localStorage.removeItem("finalScore");
  window.location.href = "./index.html";
});

//Clears the local storage of the saved scores (and the current score)
clearButton.addEventListener("click", function () {
  window.localStorage.removeItem("scores");
  window.localStorage.removeItem("finalScore");
  highscoreEl.textContent = "";
});

init();
