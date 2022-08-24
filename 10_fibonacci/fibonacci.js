const fibonacci = function (num) {
    if (num < 0) return 'OOPS';

    if (num === 1 || num === 2) return 1;

    let fibArray = [1, 1];

    for (i = 3; i <= num; i++) {
        fibArray.push(fibArray[i - 3] + fibArray[i - 2]);
    }
    return fibArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

// 1, 1, 2, 3, 5, 8, 13...

// 1, 2, 3, 4, 5

