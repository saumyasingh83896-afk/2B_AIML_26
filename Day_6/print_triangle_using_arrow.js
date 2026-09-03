const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const triangle = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(i));
    }
};

rl.question("Enter number of rows: ", (input) => {
    let n = Number(input);

    triangle(n);

    rl.close();
});