'use strict';

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderDelivery: function ({
    time = 1,
    address,
    mainMenuIndex = 1,
    starterIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderpizza: function (mainIng, ...others) {
    console.log(mainIng);
    console.log(others);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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

// //DEFAUKT VALUES
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
