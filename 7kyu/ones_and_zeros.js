/* INSTRUCTIONS:
   Given an array of ones and zeroes, convert the equivalent binary value to an integer.
   Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

   Examples:
   Testing: [0, 0, 0, 1] ==> 1
   Testing: [0, 0, 1, 0] ==> 2
   Testing: [0, 1, 0, 1] ==> 5
   Testing: [1, 0, 0, 1] ==> 9
   Testing: [0, 0, 1, 0] ==> 2
   Testing: [0, 1, 1, 0] ==> 6
   Testing: [1, 1, 1, 1] ==> 15
   Testing: [1, 0, 1, 1] ==> 11

   However, the arrays can have varying lengths, not just limited to 4.
*/ 

// SOLUTION 1A: Parsing a binary string
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(''), 2);
};

// SOLUTION 1B: ES6 arrow function alternative
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// SOLUTION 2A: Reducing the value with math
function binaryArrayToNumber(arr) {
  return arr.reduce((acc, cur) => acc * 2 + cur, 0);
}

// SOLUTION 2B: ES6 arrow function alternative
const binaryArrayToNumber = arr => arr.reduce((acc, cur) => acc * 2 + cur, 0);