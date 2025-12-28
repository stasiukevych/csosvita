// literal object
const book1 = {
    title: "Book 1",
    author: "John Doe",
    year: "2021",
    getSummary: function () {
        return `${this.title} ${this.author} ${this.year}`;
    }
}
console.log(book1);
console.log(book1.getSummary())

// constructor
function Book(title, author, year) {
    console.log('Book initializing...');
    this.title = title;
    this.author = author;
    this.year = year;
    console.log(`Book initialized: ${this.title} ${this.author} ${this.year}`);

    // this.getSummary = function () {
    //     return `${this.title} ${this.author} ${this.year}`;
    // }
}

// work with prototype
Book.prototype.getSummary = function () {
    return `${this.title} ${this.author} ${this.year}`;
    G
}

Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// revise / change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

const book2 = new Book('Title 1', 'Author 1', '1999');
const book3 = new Book('Title 2', 'Author 2', '2000');

console.log(book2.title);
console.log(book2.author);
console.log(book2.getSummary());
console.log(book2.getAge());

console.log(book3);
book3.revise('2001');
console.log(book3);

// inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());

// object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} ${this.author} ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// create object
const book4 = Object.create(bookProtos);
book4.title = "Book 4";
book4.author = "John Doe";
book4.year = "2021";

const book5 = Object.create(bookProtos, {
    title: {value: "Book 5"},
    author: {value: "John Doe"},
    year: {value: "2023"}
});

console.log(book4);
console.log(book5);

// classes
class Book2 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} ${this.author} ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// instantiate object
const book6 = new Book2('Title 1', 'Author 1', '1999');
console.log(Book2.topBookStore());

// subclasses
class Magazine2 extends Book2 {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag3 = new Magazine2('Mag 3', 'John Doe', '2002', 'Jan');
console.log(mag3.getSummary());