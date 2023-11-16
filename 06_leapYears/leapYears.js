const leapYears = function(year) {
    return new Date(year, 1, 29).getDate() === 29;
};

// Do not edit below this line
module.exports = leapYears;
