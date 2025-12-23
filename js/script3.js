// constructor function
function Person(fName, sName, age, dob, rating) {
    this.fName = fName;
    this.sName = sName;
    this.age = age;
    this.rating = rating;
    this.dob = new Date(dob);

    // don't do like this, add function using prototype
    // this.getBirthYear = () => this.dob.getFullYear();
    // this.getFullName = () => `${this.fName} ${this.sName}`;
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
};

Person.prototype.getFullName =function () {
    return `${this.fName} ${this.sName}`;
}

// Class
class Person2 {
    constructor(fName, sName, dob) {
        this.fName = fName;
        this.sName = sName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.fName} ${this.sName}`;
    }
}

//instantiate object
const person = new Person2('John','Doe', 28, '5-4-1980',4.6);
console.log(person);
console.log(person.getBirthYear());
console.log(person.getFullName());