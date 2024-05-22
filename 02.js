let num = 30; 
function  DividebyThreeUptoNum (num){
    let result = ''; 
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            
            result += i
        }
    }
    return result
}

console.log(DividebyThreeUptoNum(num))

module.exports = { DividebyThreeUptoNum };