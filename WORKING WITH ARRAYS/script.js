"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acct) {
  const incomes = acct.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${incomes}€`;
  const output = acct.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumOut.textContent = `${Math.abs(output)}€`;

  const interest = acct.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acct.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => name[0])
      .join(``);
  });
};
createUsernames(accounts);
const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};
//EVENT HANDLER
let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
  }
  containerApp.style.opacity = 100;

  //clear input fields
  inputLoginUsername.value = inputLoginPin.value = ``;
  inputLoginPin.blur();

  //UPDATE UI
  updateUI(currentAccount);
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcct = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, recieverAcct);

  if (
    amount > 0 &&
    recieverAcct &&
    currentAccount.balance >= amount &&
    recieverAcct?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcct.movements.push(amount);
  }

  //UPDATE UI
  updateUI(currentAccount);
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //ADD MOVEMENT
    currentAccount.movements.push(amount);

    // UPDATE UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = ``;

    labelWelcome.textContent = `Log in to get started`;
  }
});
let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
/////////////////////////////////////////////////
//FIND
const firstWithrawal = movements.find((mov) => 0);
for (const acc of accounts) {
  if (acc.owner === `Jessica Davis`) {
    console.log(acc);
  }
}

console.log(movements);
console.log(firstWithrawal);
const account = accounts.find((acc) => acc.owner === `Jessica Davis`);
console.log(account);
//CHAINING ALL METHODS
//PIPELINE
const totalDepositedUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositedUSD);
// REDUCE
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);
const maximumNumber = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maximumNumber);
/// FILTER
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
// ///MAP

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `Deposited` : `Withdrew`} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
/*
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = [`a`, `b`, `c`, `d`, `e`];

//SLICE METHOD - doesnt mutate only return value
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

//these are two way of creating a shallow clone of an array
console.log(arr.slice());
console.log([...arr]);

//SPLICE- mutate
// console.log(arr.splice(2));
//second parameter is the delete count
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE - mutate
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//same as
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(`-`));
///AT
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting last element of an array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
//also works on strings

console.log(`jonas`.at(0));
console.log(`jonas`.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`----------FOR EACH-----------`);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: finction(200)
// 0: finction(450)
// 0: finction(400)
// ...
// FOR EACH ON A MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//ON set
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
/////////////////////////////////////
// SOME
// EQUALITY
console.log(movements);
console.log(movements.includes(-130));
// CONDITION
console.log(movements.some((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);
////////////////////////////////////
// EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));
// seperate call back
const deposits = (mov) => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));
/////////////////////////////////////////////
// FLAT AND FLATMAP
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

const overAllBalance2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance2);
//flatmap
const overAllBalance3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance3);
///////////////////////////////////////////////////
// SORTING arrays mutate
const owners = [`jonas`, `zach`, `adam`, `martha`];
console.log(owners.sort());
console.log(owners);

// Numbers;
console.log(movements);

// return < 0, A, B (Keep order)
// return > 0, A, B (Switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

///////////////////////////////////////////////////////////////
// More way of creating and filling arrays
const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map() => 5)
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr4.fill(23, 2, 6);
console.log(arr4);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const w = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(w);

labelBalance.addEventListener(`click`, function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    (el) => Number(el.textContent.replace(`€`, ``))
  );
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
});

////////////////////////
// ARRAY METHOD PRACTICE
//1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  // .filter((mov) => mov > 0)
  .reduce((sum, cur) => (cur > 0 ? sum + cur : sum), 0);

console.log(bankDepositSum);
//2.
const numDeposits100 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits100);
//alternatively
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);
//3.
const sum = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? sum.deposits += cur : sum.withdrawals += cur
      sums[cur > 0 ? `Deposits` : `Withdrawals`] += cur;
      return sums;
    },
    { Deposits: 0, Withdrawals: 0 }
  );

const { Deposits, Withdrawals } = sum;
console.log(sum);
console.log(Deposits, Withdrawals);
//4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];

  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(` `);
  console.log(titleCase);
  return capitalize(titleCase);
};

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this iS A LONG but not too Long`));
console.log(convertTitleCase(`and here is another TITLE with an EXAMPLE`));

////////////////////////////////////////////////////////////////////////////////
//WHICH ARRAY METHOD TO USE AND WHEN
//////////////
/*
TO MUTATE ORIGINAL ARRAY, methods:-
ADD TO ORIGINAL:
  .push  (end)
  .unshift  (start)

REMOVE FROM ORIGINAL:
  .pop  (end)
  .shift  (start)
  .splice (any)

OTHERS
  .reverse
  .sort
  .fill
*/
//////////////
/*
A NEW ARRAY, methods:-
A NEW ARRAY:
COMPUTED FROM ORIGINAL:
  .map  (loop)
FILTERED USING CONDINTION:
  .filter
PORTION OF ORIGINAL:
  .slice
ADDING ORIGINAL TO OTHER:
  .concat
FLATTENING THE ORIGINAL:
  .flat
  .flatMap
*/
//////////////
/*
AN ARRAY INDEX, methods:-
BASED ON VALUE:
  .indexOf
BASED TEST CONDITION
  .findIndex
*/
//////////////
/*
AN ARRAY ELEMENT, method:-
BASED ON TEST CONDITION:
  .find
*/
//////////////
/*
KNOW IF ARRAY INCLUDES, methods:-
BASED ON VALUE:
  .includes
BASED TEST CONDITION
  .some
  .every
*/
//////////////
/*
A NEW STRING, method:-
BASED ON SEPERATOR STRING:
  .join
*/
//////////////
/*
TO TRANSFORM TO (SINGLE)VALUE, method:-
BASED ON ACCUMULATOR
  .reduce (boil down array to single value of any type)
*/
//////////////
/*
TO JUST LOOP OVER AN ARRAY, method:-
BASED ON CALLBACK:
  forEach (Does not create a new array, just loops over it)
*/
