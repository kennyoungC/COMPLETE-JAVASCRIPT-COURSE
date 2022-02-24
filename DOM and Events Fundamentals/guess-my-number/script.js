`use strict `;
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `correct answer`;

document.querySelector(`.number`).textContent = 34;
document.querySelector(`.guess`).value = 45;*/
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage(`please input a number`);
    // document.querySelector(`.message`).textContent = `please input a number`;
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `correct answer`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`you lost the game`);
      //document.querySelector(`.message`).textContent = `you lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📈 Too high!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `you lost the game`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📉 Too low!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `you lost the game`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
//Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �*/

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
