const repeatString = function (string, num) {
    let finalString = '';

    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 1; i <= num; i++) {
            finalString = finalString + string;
        }
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
