// FUNCTIONS
function logger() {
  console.log(`my name is kenneth`);
}
logger();
logger();
function fruitProcessor(apples, orange) {
  const juice = `juice has ${apples} apples and ${orange} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const calcAge1 = (birthYear) => (age = 2022 - birthYear);
console.log(calcAge1(1997));
/*
//3 types of  a functions

// FUNCTION DECLARATION
function calcAge1(birthYear) {
  age = 2022 - 1997;
  return age;
} 
// FUNCTION EXPRESSION
const calcAge1 = function (birthYear) {
  age = 2022 - 1997;
  return age;
  const calcAge1 = function (birthYear) {
    age = 2022 - 1997;
    return age;
  };
};
//ARROW FUNCTION
const calcAge1 = (birthYear) => (2022 - birthYear);*/

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "bob"));
// console.log(yearsUntilRetirement(1997, "dan"));

// CALLING FUNCTION UNDER FUNCTION
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, orange) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(orange);
  const juice = `juice has ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
console.log(fruitProcessor(4, 5));
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "bob"));
console.log(yearsUntilRetirement(1950, "dan"));

//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �*/
const calcAverage = (firstScore, secondScore, thirdScore) =>
  (firstScore + secondScore + thirdScore) / 3;
console.log(calcAverage(4, 3, 5));

let resultAvgFirstTeam = calcAverage(44, 23, 71);
let resultAvgSecondTeam = calcAverage(65, 54, 49);
console.log(resultAvgFirstTeam, resultAvgSecondTeam);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} Vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} Vs. ${avgDolhins})`);
  } else {
    console.log(`No one wins`);
  }
};
console.log(checkWinner(resultAvgFirstTeam, resultAvgSecondTeam));
// TEST 2
resultAvgFirstTeam = calcAverage(85, 54, 41);
resultAvgSecondTeam = calcAverage(23, 34, 27);
console.log(resultAvgFirstTeam, resultAvgSecondTeam);
console.log(checkWinner(resultAvgFirstTeam, resultAvgSecondTeam));

//ARRAYS
const friends = [`Micheal`, `Steven`, `Peter`];
console.log(friends);
//another way of creating an array
// const years = new Array(1991, 1987, 1789, 2009);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

// Exercise
const calcAged = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1987, 1789, 2009, 2018];

const age1 = calcAged(years[0]);
const age2 = calcAged(years[1]);
const age3 = calcAged(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAged(years[0]),
  calcAged(years[1]),
  calcAged(years[years.length - 1]),
];
console.log(ages);
