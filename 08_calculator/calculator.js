const add = function(...nums) {
  let sum = 0;
  for(let num of nums ) sum += num;
  return sum;
};

const subtract = function(...nums) {
  return nums.reduce((num1, num2) => num1 - num2);
};

const sum = function(nums) {
  if (nums === undefined) return 0;

  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let total = 1;
  for(let i = 0; i < nums.length; i++) {
    total *= nums[i];
  }
  return total;
};

const power = function(base, pow) {
  return Math.pow(base, pow);
};

const factorial = function(num) {
  let fact = 1;
  if (num === 0) return 1;
  for(let i = 1; i <= num; i++) {
    fact *= i;
  }
	return fact;
};

/// Recursive Factorial ///
// function recursiveFactorial(num) {
//   if (num === 0) return 1;

//   return num * recursiveFactorial(num-1);
// }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
