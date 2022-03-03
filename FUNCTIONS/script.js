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
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
//is the same as doing...
const flightNum = flight;
const passenger = jonas;
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

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
const high5 = function () {
  console.log(`❤️`);
};
document.body.addEventListener(`click`, high5);

return a function
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`hello`)(`jonas`);
