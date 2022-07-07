/* INSTRUCTIONS:
   You are given an odd-length array of integers, in which all of them are the same, except for one single number.
   Complete the method which accepts such an array, and returns that single different number.
   The input array will always be valid! (odd-length >= 3)

   Examples
   [1, 1, 2] ==> 2
   [17, 17, 3, 17, 17, 17, 17] ==> 3
*/ 

// SOLUTION 1A
function stray(numbers) {
  return numbers[0] === numbers[1] 
    ? numbers.find(num => num !== numbers[0])
    : numbers[1] === numbers[2]
        ? numbers[0]
        : numbers[1]
}

// SOLUTION 1B: ES6 arrow function alternative
const stray = numbers => {
  return numbers[0] === numbers[1] 
    ? numbers.find(num => num !== numbers[0])
    : numbers[1] === numbers[2]
        ? numbers[0]
        : numbers[1]
}

// SOLUTION 2A
function stray(numbers) {
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}

// SOLUTION 2B: ES6 arrow function alternative
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// SOLUTION 3A
function stray(numbers) {
  return numbers.reduce((x, y) => x ^ y);
}

// SOLUTION 3B: ES6 arrow function alternative
const stray = numbers => numbers.reduce((x, y) => x ^ y);