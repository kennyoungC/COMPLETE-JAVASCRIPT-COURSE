`use strict`;

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);

createBooking(`LH123`, undefined, 1000);
console.log(bookings);

const flight = `LH234`;
const jonas = {
  name: `jonas kenneth`,
  passport: 2322234587551,
};
const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;
  if (passenger.passport === 2322234587551) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport`);
  }
};
// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
//is the same as doing...
const flightNum = flight;
const passenger = jonas;
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};
//HIGHER-ORDER FUNCTION
const tansformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

tansformer(`Javascript is the best language`, upperFirstWord);

tansformer(`Javascript is the best language`, oneWord);
//JS uses callbacks all the time
// const high5 = function () {
//   console.log(`❤️`);
// };
// document.body.addEventListener(`click`, high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`hello`)(`jonas`);

const lufhansa = {
  airline: `Lufhansa`,
  iatacode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};
lufhansa.book(239, `Kenneth Obi`);
lufhansa.book(635, `John Smith`);

const eurowings = {
  airline: `Eurowings`,
  iatacode: `EW`,
  bookings: [],
};
const book = lufhansa.book;
//Does NOT work
// book(23, `Sarah Williams`)

//CALL METHOD
book.call(eurowings, 23, `Sarah Williams`);
console.log(eurowings);

book.call(lufhansa, 239, `Mary Cooper`);
console.log(lufhansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iatacode: `LX`,
  bookings: [],
};
book.call(swiss, 583, `Mary Cooper`);

///////////////////////////////
//APPLY METHOD
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);
//apply method is not really used in modern JS because of the intoduction of spread operator example below
book.call(swiss, ...flightData);

///////////////////////////////////////////////
//BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufhansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Williams`);
const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Jonas Kenneth`);
bookEW23(`Martha Cooper`);

//BIND with event listeners
lufhansa.planes = 300;
lufhansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufhansa.buyPlane.bind(lufhansa));

//PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
*/
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === `number` &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults(`string`);
  },
  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};
// poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] });

/////////////////////////
