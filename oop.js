class Person {
  #name;
  #dateOfBirth;
  #placeOfBirth;

  constructor(name, dateOfBirth, placeOfBirth) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
    this.#placeOfBirth = placeOfBirth;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get dateOfBirth() {
    return this.#dateOfBirth;
  }

  get placeOfBirth() {
    return this.#placeOfBirth;
  }

  talk() {
    return `Hi my name is ${this.name} and I was born in ${this.placeOfBirth}.`;
  }
}

class AdaStaff extends Person {
  #role;
  #base;

  constructor(name, dateOfBirth, placeOfBirth, role, base) {
    super(name, dateOfBirth, placeOfBirth);
    this.#role = role;
    this.#base = base;
  }

  get base() {
    return this.#base;
  }

  set base(base) {
    this.#base = base;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    this.#role = role;
  }

  talk() {
    return `Hi my name is ${this.name}. I work in ${this.base} and my role is ${this.role}.`;
  }
}


// Testing code

const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");


console.log(steve);
console.log(aqil);
console.log(steve.talk());
console.log(aqil.talk());
console.log(steve.name);
steve.name = "Stevano Rich";
console.log(steve.name);
