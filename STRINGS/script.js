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
const priceNG = `288,97#`;
const priceUS = priceNG.replace(`,`, `.`).replace(`#`, `$`);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replaceAll(`door`, `gate`));
console.log(announcement.replaceAll(/door/g, `gate`));
//BOOLEANS
const planes = `Airbus A320neo`;
console.log(planes.includes(`A320`));
console.log(planes.includes(`Boeing`));
console.log(planes.startsWith(`Airb`));

if (planes.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
  console.log(`part of the NEW Airbus family`);
}

//PRACTICE EXERCISE
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes(`gun`) || baggage.includes(`knife`)) {
    console.log(`you are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};
checkBaggage(`i have a laptop, some Food and a pocket knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
///////////////////////////////////////
////SPLIT and JOIN
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);
//my method
// const capitalizeName = function (name) {
//   const lower = name.toLowerCase();
//   const split = lower.split(` `);
//   for (let i = 0; i < split.length; i++) {
//     const cap = [split[i][0].toUpperCase() + split[i].slice(1)].join();
//     console.log(cap);
//   }
// };
////////////
const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`obi kenneth`);
capitalizeName(`kenneth ann yusuf`);

////////////////////////////////////////
//PADDING
const message = `Go to gate 23!`;
console.log(message.padStart(20, `+`).padEnd(30, `+`));
console.log(` kenneth `.padStart(20, `+`).padEnd(30, `+`));

const maskCreditCard = function (number) {
  // const str = String(number)
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};
console.log(maskCreditCard(65441254789852135));
console.log(maskCreditCard(65441458798541235));
console.log(maskCreditCard("65458784789652035"));
/////////////////////
//REPEAT
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`🛬`.repeat(n)}`);
};
planesInLine(6);
planesInLine(9);
planesInLine(11);
