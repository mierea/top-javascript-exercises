const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear();
        const ageCurrent = current.yearOfDeath
          ? current.yearOfDeath - current.yearOfBirth
          : currentYear - current.yearOfBirth;
    
        const ageOldest = oldest.yearOfDeath
          ? oldest.yearOfDeath - oldest.yearOfBirth
          : currentYear - oldest.yearOfBirth;
    
        return ageCurrent > ageOldest ? current : oldest;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
