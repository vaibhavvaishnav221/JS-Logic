// Creating a function for calculating the sum of two numbers

function sum(x, y) {
    let addition = x + y;
    return addition;
}

// Creating a function that prints the table of any number

function Table(num) {
    for (let i = num; i <= num * 10; i += num) {
        console.log(i);
    }
}

// Function expression

Table(sum(3,4));