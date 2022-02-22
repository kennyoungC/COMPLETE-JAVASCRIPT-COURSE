let js = "amazing";
let firstName = "kenneth";
console.log(firstName);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// let firstName = "kenneth";
const lastName = "obi";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;

// Comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);

//  Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
console.log(`you
are
very
beautiful`);

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

const birthDate = 1991;
let century;
if (birthDate <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

let n = "1" + 1;
n = n - 1;
console.log(n);
//Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �*/
/*
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}
*/

//  Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 123) / 3;
console.log(dolphinsAvg, koalasAvg);
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log(
    `the dolphins are the winner of this competition with an average of ${dolphinsAvg}`
  );
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log(
    `the koalas are the winner of this competition with an average of ${koalasAvg}`
  );
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log(`the match is a draw`);
} else {
  console.log(`we have no winners`);
}

// SWITCH CASE
const day = "tuesday";

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy your weekend :D`);
  default:
    console.log(`Not a valid day!`);
}
if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`Write code examples`);
} else if (day === `friday`) {
  console.log(`Record videos`);
} else if (day === saturday || day === "sunday") {
  console.log(`Enjoy your weekend :D`);
} else {
  console.log(`Not a valid day!`);
}

// TERNARY OPERATORS
const age = 29;
// age >= 30 ? console.log(`I like to drink wine 🍷`) : console.log(`I love to drink water 💧 `);

const drink = age >= 30 ? `wine 🍷` : `water 💧`;
console.log(drink);

let drink2;
if (age >= 30) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water 💧`;
}
console.log(drink2);
// TERNARY OPERATORS can be used in a template literal
console.log(`i like to drink ${age >= 30 ? `wine 🍷` : `water 💧`}`);
// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �*/
let bill = 275;
// if (bill >= 50 && bill <= 300) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
