var startButton = document.querySelector(".start");
var questionDisplay = document.querySelector("p");
var listEl = document.querySelector(".question-list");
var timeDisplay = document.querySelector(".time-display");
var scoreInput = document.querySelector("form");
var initials = document.getElementById("initials");
var saveButton = document.getElementById("save");
var answerDisplay = document.getElementById("answer-display");
var score = 0;
var time = 60;
var index = 0;

//Creating all the list elements for the questions and starting them with an attribute of hidden
var questionLi1 = document.createElement("li");
listEl.appendChild(questionLi1);
var questionLi2 = document.createElement("li");
listEl.appendChild(questionLi2);
var questionLi3 = document.createElement("li");
listEl.appendChild(questionLi3);
var questionLi4 = document.createElement("li");
listEl.appendChild(questionLi4);
listEl.setAttribute("class", "hidden");

//Object containing all the questions, the answer options and the correct answer
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
  questionDisplay.textContent =
    "Time to test your coding knowledge! Click the button below to start the quiz. The faster you complete it, the better your score. But be warned, if you answer a question wrong, time will be deducted!";
}

//Created a timer that calls the function every second. Hides the Start button and makes the list elements visible. If the timer is greater than 0, the time will be displayed and count backwards each second. If not, the timer is cleared and the game is over. Same happens if the index is 5 (all the questions have been completed)
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
    if (index >= 5) {
      clearInterval(timer);
      testOver();
      return;
    }
  }, 1000);
}
//Starts the timer with the click of the start button
startButton.addEventListener("click", startTimer);
//Generates the question display. The object name (as in the question) is displayed.
function generateDisplay(index) {
  questionDisplay.innerHTML = questionObj[index].name;
  questionLi1.innerHTML = questionObj[index].questions[0];
  questionLi2.innerHTML = questionObj[index].questions[1];
  questionLi3.innerHTML = questionObj[index].questions[2];
  questionLi4.innerHTML = questionObj[index].questions[3];
  questionLi1.setAttribute("class", "label");
  questionLi2.setAttribute("class", "label");
  questionLi3.setAttribute("class", "label");
  questionLi4.setAttribute("class", "label");
}
var answer = questionObj[index].answer;

//Event listener waits for the user to select an answer. It then targets which element was chosen. The index is then changed so that the next question can be displayed

listEl.addEventListener("click", function (event) {
  var userChoice = event.target.innerHTML;

  if (userChoice === answer && index <= 3) {
    answerDisplay.innerHTML = "Correct";
    index++;
    generateDisplay(index);
  } else if (userChoice !== answer && index <= 3) {
    answerDisplay.innerHTML = "Wrong Answer";
    time = time - 5;
    index++;
    generateDisplay(index);
  } else if (userChoice === answer && index >= 4) {
    answerDisplay.innerHTML = "Correct";
    index++;
  } else if (userChoice !== answer && index >= 4) {
    answerDisplay.innerHTML = "Wrong Answer";
    time = time - 5;
    index++;
  }
});

//Hides the questions and shows a form for the user to input their initials. Sets the score to the time left by the timer.
function testOver() {
  score = time;
  timeDisplay.textContent = score;
  listEl.setAttribute("class", "hidden");
  questionDisplay.setAttribute("class", "hidden");
  scoreInput.removeAttribute("class", "hidden");
}
//Ensures the user puts an input. Saves the score with the users initials
saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (initials.value === "") {
    return;
  }

  var finalScore = {
    initials: initials.value.trim().toUpperCase(),
    finalScore: score,
  };
  localStorage.setItem("finalScore", JSON.stringify(finalScore));
  window.location.href = "./highscore.html";
});
//Resets the initial display of the game

init();
