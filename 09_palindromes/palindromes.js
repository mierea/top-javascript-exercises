const palindromes = function (str) {
    str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
    str = str.replace(/ /g, '');
    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
