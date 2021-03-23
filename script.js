var startButton = document.querySelector(".start");
var questionDisplay = document.querySelector("p");
var listEl = document.querySelector(".question-list");
var timeDisplay = document.querySelector(".time-display");
var scoreInput = document.querySelector("form");
var score = 0;
var time = 60;
var index = 0;

var questionLi1 = document.createElement("li");
listEl.appendChild(questionLi1);
var questionLi2 = document.createElement("li");
listEl.appendChild(questionLi2);
var questionLi3 = document.createElement("li");
listEl.appendChild(questionLi3);
var questionLi4 = document.createElement("li");
listEl.appendChild(questionLi4);
listEl.setAttribute("class", "hidden");

var questionObj = [
  {
    name: "This is the first question",
    questions: [
      "This is answer 1",
      "This is answer 2",
      "This is answer 3",
      "This is answer 4",
    ],
    answer: "This is answer 4",
  },
  {
    name: "This is the second question",
    questions: ["answer2.1", "answer2.2", "answer2.3", "answer2.4"],
    answer: "answer2.1",
  },
  {
    name: "This is the third question",
    questions: ["answer3.1", "answer3.2", "answer3.3", "answer3.4"],
    answer: "answer3.2",
  },
  {
    name: "This is the fourth question",
    questions: ["answer4.1", "answer4.2", "answer4.3", "answer4.4"],
    answer: "answer3.2",
  },
  {
    name: "This is the Fifth question",
    questions: ["answer5.1", "answer5.2", "answer5.3", "answer5.4"],
    answer: "answer3.2",
  },
];

function init() {
  index = 0;
  questionDisplay.innerHTML =
    "Here is the quiz for how good you are at things. Click the button to start the quiz";
}
function startTimer() {
  startButton.setAttribute("class", "hidden");
  listEl.removeAttribute("class", "hidden");
  generateDisplay(index);
  var timer = setInterval(function () {
    if (time > 0) {
      time--;
      timeDisplay.textContent = time;
    } else {
      clearInterval(timer);
      testOver();
    }
    if (index > 3) {
      clearInterval(timer);
      testOver();
      return;
    }
  }, 1000);
}

startButton.addEventListener("click", startTimer);

listEl.addEventListener("click", function (event) {
  var userChoice = event.target.innerHTML;
  if (index > 3) {
    testOver();
    return;
  }
  if (userChoice === answer) {
    console.log("YAY");
    index++;
    generateDisplay(index);
  } else {
    console.log("NOPE");
    index++;
    generateDisplay(index);
  }
});

function generateDisplay(index) {
  questionDisplay.innerHTML = questionObj[index].name;
  questionLi1.innerHTML = questionObj[index].questions[0];
  questionLi2.innerHTML = questionObj[index].questions[1];
  questionLi3.innerHTML = questionObj[index].questions[2];
  questionLi4.innerHTML = questionObj[index].questions[3];
}
var answer = questionObj[index].answer;

function testOver() {
  score = time;
  timeDisplay.textContent = score;
  listEl.setAttribute("class", "hidden");
  questionDisplay.setAttribute("class", "hidden");
  scoreInput.removeAttribute("class", "hidden");
}
init();
