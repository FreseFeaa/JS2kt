let num = 10;
function createIterations(num) {
    let result = '';
    let current = '';
    for (let i = 1; i <= num; i++) {
        current += i;
        result += current + ' ';
    }
    return result.trim();
}



console.log(createIterations(num));
module.exports = { createIterations };