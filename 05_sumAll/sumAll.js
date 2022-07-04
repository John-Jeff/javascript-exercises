const sumAll = function (min, max) {
    let sum = 0;
    if (typeof(min) !== 'number' || typeof(max) !== 'number') {
        return 'ERROR';
    }
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    if (max < min) {
        let newMax = min;
        min = max;
        max = newMax;
    }
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
