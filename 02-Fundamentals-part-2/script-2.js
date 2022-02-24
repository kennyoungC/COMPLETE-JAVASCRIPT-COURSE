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

// Elements to insert at the end of the array
// const friends = [`Micheal`, `Steven`, `Peter`];
friends.push(`jay`);
const newLenght = friends.push(`jay`);
console.log(newLenght);

// Elements to insert at the start of the array
friends.unshift(`john`);
console.log(friends);

// Element to remove at the end of an array
friends.pop(); // last
friends.pop();

const popped = friends.pop();
console.log(popped);
console.log(friends);

//Element to remove at the start of an array
friends.shift();
console.log(friends);

//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`bob`));

//Determines whether an array includes a certain element, returning true or false as appropriate.
friends.push(23);
console.log(friends);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`bob`));
console.log(friends.includes(23));
// mostly used to write conditionals
if (friends.includes(`Steven`)) {
  console.log(`you have a friend called steven`);
}
// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �*/
// const calcTip = function(bill){
//   if (bill >= 50 && bill <= 300){
//     tip = bill * 0.2
//   }else {
//     tip = bill * 0.15
//   }
// }
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(44));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips, bills);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
function writeLine() {
  console.log(`---------------------------`);
}
// OBJECTS
const myProfile = {
  firstName: `Kenneth`,
  lastName: `Obi`,
  job: `Student`,
  friends: [`silas`, `favour`, `tanto`],
  birthYear: 1997,
  hasDriverLicense: false,

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  //mini challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year ${this.job} and has ${
      this.hasDriverLicense ? `a` : `no`
    } driver's license`;
  },
};
console.log(myProfile.getSummary());
console.log(writeLine());
// adding functions inside an object
console.log(myProfile.calcAge());
console.log(myProfile.age);

console.log(writeLine());
console.log(myProfile.lastName);
console.log(myProfile[`lastName`]);

const nameKey = `Name`;
console.log(myProfile[`first` + nameKey]);
console.log(myProfile[`second` + nameKey]);

// const interestedIn = prompt(
//   `what do you want to know about jonas? Choose between firstName, lastName, age, job and friends`
// );
// if (myProfile[interestedIn]) {
//   console.log(myProfile[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job and friends `
//   );
// }

myProfile.location = `lithuania`;
myProfile[`email`] = `obikenneth913@gmail`;
console.log(myProfile);

//mini challenge
console.log(
  `${myProfile.lastName} have ${
    myProfile[`friends`].length
  } friends, and his best friend is called ${myProfile.friends[1]}`
);
//Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �*/
const markProfile = {
  fullName: `Miller Mark`,
  Mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.Bmi = this.Mass / this.height ** 2;
    return this.Bmi;
  },
};
const johnProfile = {
  fullName: ` John Smith`,
  Mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.Bmi = this.Mass / this.height ** 2;
    return this.Bmi;
  },
};
markProfile.calcBMI();
johnProfile.calcBMI();
console.log(johnProfile.fullName);
console.log(markProfile.Bmi, markProfile.Bmi);
if (markProfile.Bmi > johnProfile.Bmi) {
  console.log(
    `${markProfile.fullName}'s BMI (${markProfile.Bmi}) is higher than ${johnProfile.fullName}'s BMI ${johnProfile.Bmi}`
  );
} else {
  console.log(
    `${johnProfile.fullName}'s BMI (${johnProfile.Bmi}) is higher than ${markProfile.fullName} BMI (${johnProfile.Bmi})`
  );
}

// FOR LOOPS
const kennethArray = [
  `kenneth`,
  `junior`,
  2037 - 1997,
  `teacher`,
  [`micheal`, `silas`, `favour`],
];
const types = [];
for (i = 0; i < kennethArray.length; i++) {
  console.log(kennethArray[i]);

  //filling types array
  // types[i] = typeof kennethArray[i];
  types.push(typeof kennethArray[i]);
}
console.log(types);
const year = [1991, 2007, 1969, 2020];
let howOld = [];
for (i = 0; i < year.length; i++) {
  howOld.push(2037 - year[i]);
}
console.log(howOld);

//continue and break
console.log(`---- CONTINUE ----`);
const array = [`bola`, 2, 4, 6, 8, `yusuf`];
let num = [];
let sum = 0;
for (i = 0; i < array.length; i++) {
  if (typeof array[i] === `string`) continue;
  num.push(array[i]);
  sum += num[i];
}
console.log(sum);
console.log(num);
console.log(`---- BREAK ----`);
for (i = 0; i < array.length; i++) {
  if (typeof array[i] === `number`) break;
  console.log(array[i], typeof array[i]);
}
// LOOP BACKWARDS
const obiArray = [
  `kenneth`,
  `junior`,
  2037 - 1997,
  `teacher`,
  [`micheal`, `silas`, `favour`],
];
for (let i = obiArray.length - 1; i >= 0; i--) {
  console.log(i, obiArray[i]);
}
//CREATING A LOOP INSIDE A LOOP

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------- Starting ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition`);
  }
}

//WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: lifting weights repetition ${rep}`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a dice with the number: ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log(`you just rolled a number 6`);
}
//
// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �*/
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bill);
const tipss = [];
const totals = [];
for (let i = 0; i < bill.length; i++) {
  let tip = calcTip(bill[i]);
  tipss.push(tip);
  let t = bill[i] + tip;
  totals.push(t);
}
console.log(`tips array: ${tipss}`);
console.log(`total array: ${totals}`);
const myArr = [5, 10, 15, 10];
const calcAveraged = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
  // console.log(sum);
  // return avg;
};
console.log(calcAveraged(totals));

const city_info = {
  Kaunas: {
    location: "Lithuania",
    population: "289380",
    visitPlaces: [
      "Raudondvaris castle",
      "Juniper Valley",
      "The Zoo",
      "Pažaislis Monastery",
    ],
  },
  Vilnius: {
    location: "Lithuania",
    population: "400380",
    visitPlaces: ["Traki castle", "KFC", "Old Town"],
  },
};

// for (let i = 0; i < city_info.length; i++) {
console.log(`kaunas is in ${city_info.Kaunas.location}`);
console.log(`the population is ${city_info.Kaunas.population}`);
console.log(`you can visit  ${city_info.Kaunas.visitPlaces}`);
/* kaunas is in lithuania 
the population is 2893...
you can visit rando jun the zoo  paa*/

//PROBLEM AND APPROACH ON HOW TO SOLVE
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//- what is temp amplitutde? answer: Differnce between highest and lowest temp
//- how to compute max and min temperatures?
//- What's a sensor error? and what to do

//2) Breaking up into sub-problems
//- How to ignore errors?
//-Find max value in temp array
//-Find min value in temp array
//-Substract the min from the max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//PROBLEM 2
//Function should now receive 2 arrays of temps

//- With two arrays, should we implement functionality twice? NO! just merge two arrays

//2) Breakin up into sub- problems
// - how to merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  let temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(
  [3, 5, 7, 3, -2, 4],
  [5, 3, 5, 7, 3, 1, -6]
);
console.log(amplitudeNew);
