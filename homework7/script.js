// Array.map tasks
function multiplyOnTwo(aray = []) {
    return aray.map(item => item * 2);
}

console.log(multiplyOnTwo([1, 2, 4, 5, 6]));

function upperCaseArray(array = []) {
    return array.map(item => item.length !== 0 ? item.toUpperCase() : item);
}

console.log(upperCaseArray(['anna', 'bob', 'charlie']));

function customCalculatePrice(array = []) {
    return array.map(item => item + item * 0.2);
}

console.log(customCalculatePrice([100, 200, 300]));

// Array.filter tasks
function getMoreThanTen(array = []) {
    return array.filter(item => item > 10);
}

console.log(getMoreThanTen([5, 12, 8, 130, 44]));

function getWhenLengthGraterFive(array = []) {
    return array.filter(item => item.length > 5);
}

console.log(getWhenLengthGraterFive(['apple', 'banana', 'kiwi', 'strawberry']));

function getEvenNumbers(array = []) {
    return array.filter(item => item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// push/pop
const fruits = ['apple', 'banana'];
fruits.push('orange');
fruits.push('grape');
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];
const removedNumber = numbers.pop();
console.log(numbers);
console.log(removedNumber);

// shift / unshift
const orders = ['second', 'third'];
orders.unshift('first');
console.log(orders);

const tens = [10, 20, 30, 40];
const tenNumber = tens.shift();
console.log(tens);
console.log(tenNumber);

// Combination tasks
function getOddsMultiplyOnThree(array = []) {
    return array.filter(item => item % 2 !== 0).map(item => item * 3);
}

console.log(getOddsMultiplyOnThree([1, 2, 3, 4, 5, 6]));

const empty = [];
empty.push(1, 2, 3);
const firstItem = empty.shift();
console.log(empty);
console.log(firstItem);