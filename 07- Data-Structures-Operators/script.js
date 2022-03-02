'use strict';

const weekDays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);
//OPTIONAL CHAINING

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //ES6 enhanced object literals
  openingHours,
  orderDelivery({ time = 1, address, mainMenuIndex = 1, starterIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderpizza(mainIng, ...others) {
    console.log(mainIng);
    console.log(others);
  },
};

//////////////////////////////////////
//Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);
//WITH optionnal chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  const close = restaurant.openingHours[day]?.close ?? `unavailable`;
  console.log(`on ${day}, we are open at ${open} and close by ${close}`);
}
//ON methods
console.log(restaurant.order?.(0, 1) ?? `method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `method does not exist`);
// ON arrays
const user = [
  {
    name: `jonas`,
    email: `hello@jonas.io`,
  },
];
// const user = [];
console.log(user[0]?.name ?? `user array empty`);
//saves the stress of doing this:-
if (user.length > 0) {
  console.log(user[0].name);
} else {
  console.log(`user array empty`);
}

//////////////////////////
//using FOR OF on objects
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are on open on ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day}, `;
}
console.log(openStr);
//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);
//ENTIRE OBJECT
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
/*
restaurant.orderDelivery({
  time: `22:30`,
  address: `Universiteto g 8`,
  mainMenuIndex: 2,
  starterIndex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
//////////////////////////////////////////
//DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// const [x, y, z] = arr;
// console.log(x, y, z);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //SWITCHING VARIABLES
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //RECIEVE 2 RETURN VALUES FROM A FUNCTION
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //DESTRUCTING A NESTED ARRAY
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //DEFAUlT VALUES
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
////////////////////////////////////

//THE SPREAD OPERATOR...
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

//COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

//JOIN 2 arrays
const joinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinedMenu);
/// Iterables are array, strings, maps, sets. NOT object
//example of a string spread operator
const str3 = `kenneth`;
const letters = [...str3, ` `, `.S`];
console.log(letters);
///REAL WORLD EXAMPLE
const ingredients = [
  // prompt(`please type in your first ingredient`),
  // prompt(`your second?`),
  // prompt(`and your third`),
];
restaurant.orderPasta(...ingredients);

//old way would have been:-

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

/////////////////////////
//SINCE 2018 SPREAD OPERATOR WORKS ON OBJECT EVEN THOUGH THEY ARE NOT ITERABLE
//OBJECT
const newRestuarant = { foundedIn: 1991, ...restaurant, founder: `kenneth` };
console.log(newRestuarant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `chigozie obi`;
console.log(restaurant.name);
console.log(restaurantCopy.name);

///////////////////////////////////////////
//SREAD, because on the RIGHT side of the = sign
const arr5 = [1, 2, 3, ...[3, 4]];

// REST, because on the LEFT side of the = sign
const [k, m, ...others] = [1, 2, 5, 6, 7, 4];
console.log(k, m, others);
//REST on arrays
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);
//REST on object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//REST on functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 6, 7, 34, 7, 3);
add(2, 3, 6, 3, 5, 7, 8, 5, 4, 3, 6);

const t = [23, 5, 7];
add(...t);

restaurant.orderpizza(`spinach`, `onion`, `olives`, `mushroom`);

/////////////////////////////////////////////
console.log(`---------- OR ---------`);
//USE any data type, return ANY data type, short-circuiting otherwise known as short-circuit evaluation
console.log(3 || `jonas`);
console.log(' ' || `kenneth`);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || ` ` || `hello` || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);
////////////nullish coalacing operator
//nullish
const guest3 = restaurant.numGuests ?? 10;

console.log(guest3);
/////////////////////////////////////////////
console.log(`---------- AND ---------`);
console.log(0 && `jonas`);
console.log(0 && `jonas`);
console.log(7 && `jonas`);

console.log(`hello` && 23 && null && `jonas`);

//practical example
if (restaurant.orderpizza) {
  restaurant.order(`mushroom`, `spinach`);
}

restaurant.orderpizza && restaurant.orderpizza(`mushroom`, `spinach`);

const rest1 = {
  name: `paul`,
  numGuests: 20,
};
const rest2 = {
  name: `paul`,
  owner: `Ken castle`,
};
//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// nullish assignment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);
//AND assignment operator
// rest1.owner = rest1.numGuests && `<ANNOYMOUS>`;
// rest2.owner = rest2.numGuests && `<ANNOYMOUS>`;

rest1.owner &&= `<ANNOYMOUS>`;
rest2.owner &&= `<ANNOYMOUS>`;

console.log(rest1);
console.log(rest2);

///////////////////////
//FOR OF loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}*/

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//SETS
const ordersSet = new Set([
  `pizza`,
  `pasta`,
  `risotto`,
  `pasta`,
  `pizza`,
  `pizza`,
]);
console.log(ordersSet);
console.log(new Set(`jonas`));
console.log(ordersSet.size);
console.log(ordersSet.has(`pizza`));
console.log(ordersSet.has(`bread`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
// ordersSet.clear()
ordersSet.delete(`risotto`);
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}
//EXAmPLE
//also we also converted a set to an array using the spread operator
const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`];
console.log(new Set(staff).size);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(`kennethchigozieobi`));
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//MAP
const rest = new Map();
rest.set(`name`, `classico italiano`).set(1, `firenze italy`);
console.log(rest.set(2, `lisbon, portugal`));
rest
  .set(`categories`, [`pizza`, `pasta`, `risotto`, `pasta`, `pizza`, `pizza`])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `we are open :D`)
  .set(false, `we are closed :(`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

console.log(rest.has(`categories`));
rest.delete(2);
// rest.clear();
const headder = document.querySelector(`h1`);
console.log(headder);
const arr = [1, 2];
rest.set([arr], `test`);
// rest.set(document.querySelector(`h1`), `heading`);
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
