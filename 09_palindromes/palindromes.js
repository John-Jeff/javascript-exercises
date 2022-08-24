const palindromes = function (word) {
    let wordArray = [];

    word = (word.replace(/[!.,'":;\s]/g, "")).toLowerCase();

    return (
        word
            .split('')
            .reverse()
            .join('') === word
    )
    
    ///Alternative Method///

    // for (let letters of word) wordArray.push(letters);

    // for (let i = 0; i < wordArray.length; i++) {
    //     if (wordArray[0 + i] === wordArray[(wordArray.length - 1) - i]) {
    //     } else return false;
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
