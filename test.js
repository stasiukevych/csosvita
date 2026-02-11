const coffe = {
    a: "sdf",
    b: "asdfasdf",

    test: function () {
        console.log(this.b);
    }
}

coffe.test();
console.log(!0);