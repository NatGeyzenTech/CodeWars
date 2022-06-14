/* INSTRUCTIONS:
   In this little assignment you are given a string of space separated numbers, 
   and have to return the highest and lowest number.

   Examples
   highAndLow("1 2 3 4 5");  // return "5 1"
   highAndLow("1 2 -3 4 5"); // return "5 -3"
   highAndLow("1 9 3 4 -5"); // return "9 -5"

   Notes
   - All numbers are valid Int32, no need to validate them.
   - There will always be at least one number in the input string.
   - Output string must be two numbers separated by a single space, and highest number is first.
*/ 

// SOLUTION 1A: 
function highAndLow(numbers){
  const numArr = numbers.split(' ');
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

// SOLUTION 1B: ES6 arrow function alternative
const highAndLow = numbers => {
  const numArr = numbers.split(' ');
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

// SOLUTION 2A: 

// SOLUTION 2B: ES6 arrow function alternative

// SOLUTION 3A: 

// SOLUTION 3B: ES6 arrow function alternative