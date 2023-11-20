const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let initialVal = 0;
	return arr.reduce((acc, curr) => acc + curr, initialVal,);
};

const multiply = function(arr) {
  let initialVal = 1;
	return arr.reduce((acc, curr) => acc * curr, initialVal,);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if(a==0 || a==1) return 1;
  return a * factorial(a-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
