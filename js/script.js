// var, let, const
let firstName = 'Anatolii';
firstName = 'Anatoli2';

const color = 'red';
//-------------------------

// String, Numbers, Boolean, null, undefined, symbol
const name = 'John';
const age = 25;
const rating = 4.5;
const isCool = true;
const x = null;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
//-------------------------

const helloMessage = `I am ${name}, years ${age}, my rate is ${rating}`;
console.log(helloMessage);
// console.log(helloMessage.length);
// console.log(helloMessage.toUpperCase());
// console.log(helloMessage.substring(0,4));
// console.log(helloMessage.split(''));
//-------------------------

// Arrays - variables that hold a multiple valeus
const numbers = new Array(1, 2, 3, 4);
const fruits = ['apple', 'orange', 'banana', 'pineapple', 'coconut'];
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

fruits[2] = 'grapes';
fruits.push('mango');
fruits.unshift('strawberry');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('orange'));
//-------------------------

const person = {
    fName: 'Anatoli',
    lName: 'Anatoli',
    age: 27,
    hobbies: ['movies', 'music', 'sports'],
    address: {
        street: '50 main str.',
        country: 'USA',
        city: 'New York'
    }
};
console.log(person);
console.log(person.fName);
console.log(person.lName);
console.log(person.address);

const { fName, lName, address: {city} } = person;
console.log(fName);
console.log(lName);
console.log(city);
person.email = 'john@gmail.com';
console.log(person);
//-------------------------