"use strict"

const Person = function (firstName, birthYear) {
  //* Instances properties
  ;(this.firstName = firstName), (this.birthYear = birthYear)

  //Never do this
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear);
  // }
}
const jonas = new Person("jonas", 1991)
const kenneth = new Person("kenneth", 1876)
const jay = new Person("jay", 2011)
console.log(jonas, kenneth, jay)
console.log(jay instanceof Person)

//Prototypes
console.log(Person.prototype)
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
jonas.calcAge()
kenneth.calcAge()

console.log(jonas.__proto__)
console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(kenneth))

Person.prototype.species = "Homo Sapiens"
console.log(jonas.species, kenneth.species)

//
console.log(jonas.hasOwnProperty("firstName"))
console.log(jonas.hasOwnProperty("species"))

console.log(jonas.__proto__)
// Person proto
console.log(jonas.__proto__.__proto__)
//object proto
console.log(jonas.__proto__.__proto__)
// null

//proto mechanism is really a method for reusing code

// arr proto
const arr = [3, 9, 6, 3, 6, 6, 3]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__)
Array.prototype.unique = function () {
  return [...new Set(this)]
}
console.log(Array.prototype)
console.log(arr.unique())
console.log("---------coding challenge-------")
//Coding challenge

// const Car = function (make, speed) {
//   ;(this.make = make), (this.speed = speed)
// }

class Car {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} kmh`)
    return this
  }
  brake() {
    this.speed -= 10
    console.log(`${this.make} is going at ${this.speed} kmh`)
    return this
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
    return this
  }
}
const car_1 = new Car("BMW", 120)
console.log(car_1)
const car_2 = new Car("Mercedes", 95)
console.log(car_2)
// Car.prototype.accelerate = function () {
//   this.speed += 10
//   console.log(`${this.make} is going at ${this.speed} kmh`)
// }
// Car.prototype.brake = function () {
//   this.speed -= 10
//   console.log(`${this.make} is going at ${this.speed} kmh`)
// }
car_1.accelerate()
car_1.accelerate()
const ford = new Car("ford", 120)
console.log(ford.speedUS)
//ES6 Classes
ford.speedUS = 50
console.log(ford)

// Modern way of using prototypes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }
  // instance methods
  // methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  // like this
  greet() {
    console.log(`hey ${this.firstName}`)
  }

  get age() {
    return 2037 - this.birthYear
  }
  // important whenever we try to set a property that already exist
  set fullName(name) {
    console.log(name)
    if (name.includes(" ")) {
      this._fullName = name
    } else {
      alert(`${name} is not a full name`)
    }
  }
  get fullName() {
    return this._fullName
  }
  // Static method
  // works only on the cobstructor itself
  static hey() {
    console.log("hey there 👇")
  }
}

const jessica = new PersonCl("jessica davis", 1998)
console.log(jessica)
jessica.calcAge()

console.log(jessica.__proto__ === PersonCl.prototype)

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`)
// }
jessica.greet()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are execited in strict mode

//getters and setters
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop()
  },

  set latest(mov) {
    this.movements.push(mov)
  },
}
console.log(account.latest)

account.latest = 666
console.log(account.movements)

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },

  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  },
}
const steven = Object.create(PersonProto)
console.log(steven)
steven.name = "steven"
steven.birthYear = 2002
steven.calcAge()

const sarah = Object.create(PersonProto)
sarah.init("sarah", 1967)
sarah.calcAge()
//OBJECT.CREATE INHERITANCE
const StudentProto = Object.create(PersonProto)
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`)
}
const sam = Object.create(StudentProto)
sam.init("jay", 2010, "Computer Science")
sam.introduce()
sam.calcAge()
console.log(sam)
// challenge 3

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge
// }
// // link the prototypes
// EV.prototype = Object.create(Car.prototype)
// CLASS INHERITANCE
class EV extends Car {
  #charge
  constructor(make, speed, charge) {
    // always need to happen first
    super(make, speed)
    this.#charge = charge
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    return this
  }
  accelerate() {
    this.speed += 20
    this.#charge--
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    )
    return this
  }
}
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo
// }
// EV.prototype.accelerate = function () {
//   this.speed += 20
//   this.charge--
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   )
// }
const tesla = new EV("Tesla", 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.accelerate()
tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate()
// MORE ABOUT CLASSES
// 1) Pulblic fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  //1) Public fields (instances)
  locale = navigator.language
  //2) Private fields (instances)
  #movements = []
  #pin
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    //protected property
    this.#pin = pin
    // this._movements = []
    // this.locale = navigator.language
  }
  //3) public method
  // public interface
  getMovements() {
    return this.#movements
  }

  deposit(val) {
    this.#movements.push(val)
    return this
  }

  withdraw(val) {
    this.deposit(-val)
    return this
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val)
      console.log("loan approved")
      return this
    }
  }
  static helper() {
    console.log("helper")
  }
  // 4) private method
  _approveLoan(val) {
    return true
  }
}

const acct1 = new Account("jonas", "EUR", 1111)
// acct1.movements.push(250)
// acct1.movements.push(-140)
acct1.deposit(250)
acct1.withdraw(140)
acct1.requestLoan(1000)

console.log(acct1.getMovements())
console.log(acct1)
// move now private, no longer accessible by public
// console.log(acct1.#movements)
// static method works on the class itself and not its instances
Account.helper()

// chaining
acct1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acct1.getMovements())
