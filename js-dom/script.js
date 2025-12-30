const body = document.body;
body.append("Hello");

const h1 = document.createElement('h1');
h1.innerText = "Hello";
body.append(h1);

const div = document.createElement('div');
div.innerHTML = "<strong>Strong text Div</strong>";
body.append(div);

// const div2 = document.createElement('div');
// div.textContent = "<strong>Strong text Div</strong>";
// body.append(div2);

const classTest = document.querySelector('#classes');
console.log(classTest.classList);
classTest.style.background = 'red';