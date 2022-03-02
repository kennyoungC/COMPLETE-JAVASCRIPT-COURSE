`use strict`;

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[3]);
console.log(`B737`[0]);
console.log(`B737`.length);
console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  if (seat.indexOf(`B`) !== -1 || seat.indexOf(`E`) !== -1) {
    console.log(`${seat} is the midlle seat`);
  } else {
    console.log(`this is not a midlle seat`);
  }
};
const checkMiddleSeat1 = function (seat) {
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`the go the midlle seat`);
  else console.log(`you got lucky`);
};
checkMiddleSeat(`11C`);
checkMiddleSeat(`11B`);

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const capitalize = function (str) {
  const s = str.toLowerCase();
  const correct = s[0].toUpperCase() + s.slice(1);
  return correct;
};
console.log(capitalize(`jOnAs`));

// compare email
const email = `hello@jonas.io`;
const loginEmail = `    Hello@jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

//REPLACING
