const removeFromArray = function (array, ...remove) {
    for (let i of remove) {
        if (array.indexOf(i) === -1) {
            continue;
        } else {
            array.splice(array.indexOf(i), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
