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

	constructor(cohortCode, removeName) {
		this._cohortCode = cohortCode;
		this.cohort = [];
	}

	add(adaStudent) {
		this.cohort.push(adaStudent);
		return this.cohort.length;
	}

	remove(removeName) {
		// for (const member of this.cohort) {
		// 	if (removeName === member.name) {
		// 		this.cohort.slice(member, 1);
		// 	}
		// }
		for (let i = 0; i < this.cohort.length; i++) {
			//if (removeName === member.name) {
			//this.cohort.slice(i);
		}
	}
	list() {
		for (const member of this.cohort) {
			console.log(member.name);
		}
	}
}

// Testing code

//const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
//const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
//const zain = new AdaStudent("Zain Ahmed", "11/10/2005", "London", "Just Eat", "Software Engineering", "2024");

// console.log(steve);
// console.log(aqil);
// console.log(steve.talk());
// console.log(aqil.talk());
// console.log(steve.name);
// steve.name = "Stevano Rich";
// console.log(steve.name);
//console.log(zain.talk());

const april24 = new Cohort("24-04-LDN-MCR");
const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);
april24.add(sumilA);
april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024));

april24.list();
april24.remove("Sumil Aryin");
console.log(" ");
april24.list();
