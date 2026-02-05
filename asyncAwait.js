async function f() {
    return "async/await";
}

f().then(h => console.log(`theme is ${h}`));