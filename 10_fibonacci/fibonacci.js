const fibonacci = function(someNumber) {
    let a=0, b=1, c, i;
    if(someNumber < 0) return "OOPS";
    if(someNumber == 0) return a;
    for(i=2;i<=someNumber;i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
