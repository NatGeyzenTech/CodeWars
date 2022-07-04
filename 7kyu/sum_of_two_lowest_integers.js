/* INSTRUCTIONS:
   Create a function that returns the sum of the two lowest positive numbers given 
   an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
   For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
   [10, 343445353, 3453445, 3453545353453] should return 3453455. 
*/ 

// SOLUTION 1A: Sorting the numbers from smallest to largest
function sumTwoSmallestNumbers(numbers) {  
  const sortedNums = numbers.sort((a, b) => a - b);
  return sortedNums[0] + sortedNums[1];
}

// SOLUTION 1B: ES6 arrow function alternative
const sumTwoSmallestNumbers = numbers => {  
  const sortedNums = numbers.sort((a, b) => a - b);
  return sortedNums[0] + sortedNums[1];
}

// SOLUTION 2A: Using array destructuring instead of bracket notation
function sumTwoSmallestNumbers(numbers) {  
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// SOLUTION 2B: ES6 arrow function alternative
const sumTwoSmallestNumbers = numbers => {  
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// SOLUTION 3A: one-liner
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a, b) => a - b)[0] + numbers[1];
}

// SOLUTION 3B: ES6 arrow function alternative
const sumTwoSmallestNumbers = numbers => {  
  return numbers.sort((a, b) => a - b)[0] + numbers[1];
}