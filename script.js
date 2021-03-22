var startButton = document.querySelector(".start");
var questionDisplay = document.querySelector("p");
var listEl = document.querySelector(".question-list");

function init() {
  index = 0;
}

// startButton.addEventListener("click", function () {

//When start the timer is set, the button hidden and li elements are created
var questionLi1 = document.createElement("li");
listEl.appendChild(questionLi1);
var questionLi2 = document.createElement("li");
listEl.appendChild(questionLi2);
var questionLi3 = document.createElement("li");
listEl.appendChild(questionLi3);
var questionLi4 = document.createElement("li");
listEl.appendChild(questionLi4);

// startButton.setAttribute("hidden");
// });

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
];
var index = 0;
function generateDisplay(index) {
  questionDisplay.innerHTML = questionObj[index].name;
  questionLi1.innerHTML = questionObj[index].questions[0];
  questionLi2.innerHTML = questionObj[index].questions[1];
  questionLi3.innerHTML = questionObj[index].questions[2];
  questionLi4.innerHTML = questionObj[index].questions[3];
}
var answer = questionObj[index].answer;
generateDisplay(index);

listEl.addEventListener("click", function (event) {
  var userChoice = event.target.innerHTML;
  if (index > 2) {
    return;
  } else if (userChoice === answer) {
    console.log("YAY");
    index++;
    generateDisplay(index);
  } else {
    console.log("NOPE");
    index++;
    generateDisplay(index);
  }
});

// for (var i = 0; i < questionObj.length; i++) {
//   questionDisplay.innerHTML = questionObj[i].name;
//   questionLi1.innerHTML = questionObj[i].questions[0];
//   questionLi2.innerHTML = questionObj[i].questions[1];
//   questionLi3.innerHTML = questionObj[i].questions[2];
//   questionLi4.innerHTML = questionObj[i].questions[3];
//   var answer = questionObj[i].answer;

//   listEl.addEventListener("click", function (event) {
//     var userChoice = event.target;
//     if (userChoice === answer) {
//       console.log("YAY");
//     } else {
//       console.log("NOPE");
//     }
//   });
// }
