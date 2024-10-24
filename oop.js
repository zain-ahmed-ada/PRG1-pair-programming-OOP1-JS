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

class AdaStudent extends Person {
	#company;
	#pathway;
	#yearStarted;

	constructor(name, dateOfBirth, placeOfBirth, company, pathway, yearStarted) {
		super(name, dateOfBirth, placeOfBirth);
		this.#company = company;
		this.#pathway = pathway;
		this.#yearStarted = yearStarted;
	}

	get company() {
		return this.#company;
	}

	set company(company) {
		this.#company = company;
	}

	get pathway() {
		return this.#pathway;
	}

	set pathway(pathway) {
		this.#pathway = pathway;
	}

	get yearStarted() {
		return this.#yearStarted;
	}

	set yearStarted(yearStarted) {
		this.#yearStarted = yearStarted;
	}

	talk() {
		return `Hi my name is ${this.name}. I work at ${this.company} and I started in ${this.yearStarted} and my pathway is ${this.pathway}.`;
	}
}

class Cohort {
	_cohortCode;

	constructor(cohortCode) {
		this._cohortCode = cohortCode;
		this.cohort = [];
	}
}

// Testing code

//const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
//const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
//const zain = new AdaStudent("Zain Ahmed", "11/10/2005", "London", "Just Eat", "Software Engineering", "2024");
const april24 = new Cohort("24-04-LDN-MCR");

// console.log(steve);
// console.log(aqil);
// console.log(steve.talk());
// console.log(aqil.talk());
// console.log(steve.name);
// steve.name = "Stevano Rich";
// console.log(steve.name);
//console.log(zain.talk());
console.log(april24);
