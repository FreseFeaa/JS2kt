function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function sumOfFactorials(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += factorial(i);
    }

    return sum;
}

let num = 4;

console.log(sumOfFactorials(num));
module.exports = { factorial , sumOfFactorials };