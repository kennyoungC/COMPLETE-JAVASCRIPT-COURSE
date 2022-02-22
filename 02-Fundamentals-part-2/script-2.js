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
