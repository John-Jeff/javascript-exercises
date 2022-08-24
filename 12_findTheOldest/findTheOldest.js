const findTheOldest = function (array) {
    let currentYear = new Date().getFullYear();

    array.forEach(function(array) {
        if (array.yearOfDeath === undefined) array.yearOfDeath = currentYear;
    });

    return array.reduce((prev, init) =>
        (prev.yearOfDeath - prev.yearOfBirth) > (init.yearOfDeath - init.yearOfBirth) ? prev : init);
};

// Do not edit below this line
module.exports = findTheOldest;