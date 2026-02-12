class User {
    constructor(id, name, age, email) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    printData() {
        console.log(`${this.id} ${this.name} ${this.age} ${this.email}`);
    }
}

export default User;