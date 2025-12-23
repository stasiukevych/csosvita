const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'Dentist visit',
        isComplete: true
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isComplete: false
    }
];

const json = JSON.stringify(todos);
console.log(json);
//-------------------------

// For
for (let i = 0; i < todos.length; i++) {
    console.log(`For loop item ${i}`);
    console.log(todos[i]);
}

// For each
for(let todo of todos) {
    console.log(todo);
}

// While
let i = 0;
while (i < 10) {
    i++;
}
console.log(i);
//-------------------------

// forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
})

todos.forEach(todo => {
   console.log(todo.id + " " + todo.isComplete);
});

const todoTexts = todos.map(function (todo) {
   return todo.text;
});

const todoTexts2 = todos.map(todo => {
   return todo.text;
});
console.log(todoTexts);

const todoCompleted = todos.filter(todo => todo.isComplete === true);
console.log(todoCompleted);
//-------------------------

// combination of map and filter
const todosUnreadyText = todos
    .filter(todo => todo.isComplete === false)
    .map(todo => todo.text);
console.log(todosUnreadyText);
//-------------------------

// conditional & ternary operator
// if () {
//
// } else {
//
// }

// switch
const color = 'red';
switch (color) {
    case 'red': console.log('red!'); break;
    case 'green': console.log('green!'); break;
    case 'yellow': console.log('yellow!'); break;
    default: break;
}
//-------------------------

const x = 9;
const color2 = x > 10 ? 'red' : 'blue';
switch (color2) {
    case 'red':
        console.log('red!');
        break;
    case 'blue':
        console.log('blue!');
        break;
    default:
        console.log('not red or blue');
        break;
}
//-------------------------
