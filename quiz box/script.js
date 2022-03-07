`use strict`;
/*
QUIZ GAME!

RULES:
/ The player must guess correctly a certain amount of questions
/ Each correct answer gives him one point
/ Answers could be multiple or true/false
/ At the end of the game, the user must know his/her total score

QUESTIONS:
/ You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
/ Could be multiple of boolean (true / false)
/ [EXTRA] Show if the answer provided was the wrong one or correct it after clicking
/ [EXTRA] Present the questions one a time instead of having all displayed together

HINTS:
/ Keep a global variable score for the user score
/ Keep a variable questionNumber for the question the user is answering
/ When questionNumber is bigger then the available questions, present the score
/ Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know it!)
/ Start with the easier version and THEN implement the EXTRAs
/ Please debug everything / try it on the console to be sure of what to expect from your code

EXTRA:
/ Show if the answer provided was the wrong one or correct it after clicking
/ Present the questions one a time instead of having all displayed together
/ Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

-->*/
var questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
const allOptions = questions.map((quest, mov) =>
  (quest.allOptions = quest.incorrect_answers.concat(
    quest.correct_answer
  )).sort(() => Math.random() - 0.5)
);
console.log(allOptions);
console.log(questions);
//////////////////////////////////////////////
window.onload = function () {
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // HINT: for each question, create a container with the "question"
  // create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  // when EVERY question has an answer (google for how to get a value from a radio button with JS)
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display first question with a title + radio button
  // when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
};

// var questions = [
//   {
//     quest: "What is the capital of United Kingdom?",
//     choices: ["Manchester", "Birmingham", "London", "Birmingham"],
//     answer: 2,
//   },

//   {
//     quest: "What is the capital of United States?",
//     choices: ["California", "New York", "Miami", "Florida"],
//     answer: 1,
//   },
// ];
// const questionContainer = document.querySelector(`.question-Container`);
// for (const [i, val] of questions.entries()) {
//   const question = questions[i].question;

//   const options = questions[i].incorrect_answers;
//   for (let opt in options) {
//     let radioEle = document.createElement("input");
//     radioEle.type = "radio";
//     radioEle.value = options[opt];
//     radioEle.name = name;
//     document.body.appendChild(radioEle);
//     let label = document.createElement("Label");
//     label.innerHTML = options[opt];
//     questionContainer.appendChild(label);
//     questionContainer.appendChild(document.createElement("br"));
//   }
//   const html = `<div class="questionBox">
//                       <h2>questions ${i + 1}</h2>
//                          <p>${question}</p>
//                   </div>`;

//   questionContainer.insertAdjacentHTML("beforebegin", html);
// }
let radioBtns;
for (let i = 0; i < questions.length; i++) {
  let question = questions[i].question;
  document.write(question);
  let options = questions[i].allOptions;
  document.body.appendChild(document.createElement("br"));
  let name = "radio" + i;
  console.log(name);
  for (let opt in options) {
    radioEle = document.createElement("input");
    radioEle.type = "radio";
    radioEle.value = options[opt];
    radioEle.name = name;
    document.body.appendChild(radioEle);
    console.log(radioEle);
    let label = document.createElement("Label");
    label.innerHTML = options[opt];
    document.body.appendChild(label);
    document.body.appendChild(document.createElement("br"));
  }
  document.body.appendChild(document.createElement("br"));
}

let para = document.createElement(`p`);
para.textContent = `Your score is 5/10`;
document.body.appendChild(para);
let btn = document.createElement(`button`);
btn.textContent = `click here for result`;
document.body.appendChild(btn);
let findSelected = () => {
  let selected = document.querySelector("input[type=radio]:checked");
  console.log(selected);
};
findSelected();
btn.addEventListener(`click`, function (e) {
  e.preventDefault();
  let radios = document.querySelectorAll('input[type="radio"]:checked');
  const checked = radios.some((c) => c.checked);
  console.log(checked);
  const correctAnswer = questions.map((el) => el.correct_answer);
  console.log(correctAnswer);
  console.log(radios);
});
// var container = document.getElementById("container");
// for (var i = 0; i < questions.length; i++) {
//   var questionBox = document.querySelector(`.questionBox`);
//   questionBox.textContent = questions[i].quest;

//   var options = questions[i].choices;
//   for (var opt in options) {
//     //create radiobutton
//     const radioBtns = document.querySelectorAll("input[name ='option']");

//     //append radiobutton to a div
//     questionContainer.appendChild(radioBtns);
//   }
//   container.appendChild(questionContainer);
// }
