`use strict`;
/*Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////
/*Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
  studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
  Odd of victory Bayern Munich: 1.33
  Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them
  (except for "draw"). Hint: Note how the odds and the game objects have the
  same property names �
  4. Bonus: Create an object called 'scorers' which contains the names of the
  players who scored as properties, and the number of goals as the value. In this
  game, it will look like this:
  {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
  }*/
const goalScorer = game.scored;
console.log(goalScorer);
for (const [i, value] of goalScorer.entries()) {
  console.log(`Goal ${i + 1}: ${value}`);
}
const property = Object.values(game.odds);
console.log(property);
let sum = 0;
let avg = 0;
for (const eachProperty of property) {
  sum += eachProperty;
  avg = sum / property.length;
}
console.log(sum, avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`odds for ${teamStr}: ${odd}`);
}

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
// const teamOneOdd = game.odds.team1;
// const teamTwoOdd = game.odds.team2;
// const teamDrawOdd = game.odds.x;

// console.log(teamOneOdd, teamTwoOdd, teamDrawOdd);
// console.log(`odds for victory ${game.team1}: ${teamOneOdd}`);
// console.log(`odds for Draw: ${teamDrawOdd}`);
// console.log(`odds for victory ${game.team2}: ${teamTwoOdd}`);
// // for (const [team1, team2, odds] of gameOdd) {
//   console.log(team1, team2, odds);
// }
// for (const { i, value } of gameOdd) {
//   console.log(i, value);
// }
/*
//coding challenge #1
//.1)
const [players1, players2] = game.players;
console.log(players1, players2);
//.2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);
//.3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//.4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//.5
// const team1 = [game.odds.team1];
// const draw = [game.odds.x];
// const team2 = [game.odds.team2];

//a simple way could have been
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//.6
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} were scored`);
};
printGoals(...game.scored);

//.7
team1 < team2 && console.log(`Team 1 is likely to win`);
team1 > team2 && console.log(`Team 2 is likely to win`);*/
/* 
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
//.1
const events = [...gameEvents.values()];
console.log(new Set(events));
//.2
gameEvents.delete(64);
console.log(gameEvents);
//.4
for (const [key, value] of gameEvents) {
  // typeof key === `number` && key < 45
  //   ? `[FIRST-HALF] ${value}`
  //   : `[SECOND-HALF] ${value}`;
  if (typeof key === `number` && key < 45) {
    console.log(`[FIRST-HALF] ${key}' ${value}`);
  } else {
    console.log(`[SECOND-HALF] ${key}' ${value}`);
  }
}
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
/*Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK � */
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${`✅`.repeat(i + 1)}`);
  }
});

/////////////////////////////////////
//CODEWARS CHALLENGE
function descendingOrder(n) {
  // let str = "";
  // let arr = n.toString().split("");
  // let dscN = arr.sort((f, s) => s - f);
  // for (const num of dscN) {
  //   str += num;
  // }
  // return parseInt(str);
  return parseInt(String(n).split("").sort().reverse().join(""));
}
console.log(descendingOrder(678535));
function DNAStrand(dna) {
  let arr = "";
  for (let i = 0; i < dna.length; i += 1) {
    if (dna[i] === "A") arr += `T`;
    if (dna[i] === "T") arr += `A`;
    if (dna[i] === "C") arr += `G`;
    if (dna[i] === "G") arr += `C`;
  }
  return arr;
}
console.log(DNAStrand(`ATGC`));
const arr = [1, 0, 1, 0, 1, 1, 1];
console.log(arr.join(``));
const parseArray = (arr) => {
  return parseInt(arr.join(""), 2);
};
console.log(parseArray(arr));
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

const questionContainer = document.querySelectorAll(`.questions`);
for (const [i, cont] of questionContainer.entries()) {
  cont.textContent = questions[i].question;
  console.log(cont);
  // cont.textContent = questions[i].question;
}
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

// HOW TO calculate the result
// You can do it in 2 ways:
// If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
/*Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK �*/

const checkDogs = function (dogsJulia, dogsKate) {
  //his own method
  //firstly he created a clone
  // const dogsJuliaCorrected = dogsJulia.slice();
  //secondly he deleted the required elements permantly from the clone using the splice method
  // dogsJuliaCorrected.splice(0, 1);
  // dogsJuliaCorrected.splice(-2);
  // and lastly he added them together using the concat method
  // const dogs = dogsJuliaCorrected.concat(dogsKate)

  const shallowCopy = [...dogsJulia];
  const correct = [...shallowCopy.slice(1, -2), ...dogsKate];
  correct.forEach(function (val, i) {
    val >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${val} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
