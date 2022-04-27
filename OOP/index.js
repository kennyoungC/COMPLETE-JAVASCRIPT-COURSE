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

//Coding challenge

const Car = function (make, speed) {
  ;(this.make = make), (this.speed = speed)
}
const car_1 = new Car("BMW", 120)
console.log(car_1)
const car_2 = new Car("Mercedes", 95)
console.log(car_2)

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} kmh`)
}
Car.prototype.brake = function () {
  this.speed -= 10
  console.log(`${this.make} is going at ${this.speed} kmh`)
}
car_1.accelerate()
car_1.accelerate()
car_1.accelerate()
car_1.brake()
car_2.accelerate()
car_2.accelerate()
car_2.accelerate()
car_2.brake()
car_2.brake()
car_2.brake()

//ES6 Classes
// Modern way of using prototypes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

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
