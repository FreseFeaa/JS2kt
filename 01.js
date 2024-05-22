let word = 'Арнольд';

function  WordWithoutAaOo (word){
    let result = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (char !== 'а' && char !== 'о') {
            result += word[i];
        }
    }
    return result
}

console.log(WordWithoutAaOo(word));

module.exports = { WordWithoutAaOo };
