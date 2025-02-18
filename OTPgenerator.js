// Creating a JavaScript function to generate a 'n' digit OTP where n is the console.lognber of digits

function OTP(n) {
    let start = 10 ** (n - 1);
    let end = (10 ** n) - 1;
    let diff = end - start;
    console.log(Math.floor(Math.random() * diff) + start);
}

OTP(4);