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

// SOLUTION 1A: Looping over the numbers
function highAndLow(numbers){
  const arr = numbers.split(' ').map(Number);
  let highest = arr[0];
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
    if (arr[i] < lowest) lowest = arr[i];
  }
  return highest + ' ' + lowest;
}

// SOLUTION 1B: ES6 arrow function alternative
const highAndLow = numbers => {
  const arr = numbers.split(' ').map(Number);
  let highest = arr[0];
  let lowest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i];
    if (arr[i] < lowest) lowest = arr[i];
  }
  return highest + ' ' + lowest;
}

// SOLUTION 2A: Sorting the numbers
function highAndLow(numbers){
  const sortedNums = numbers.split(' ').sort((a, b) => a - b);
  return [sortedNums[sortedNums.length - 1], sortedNums[0]].join(' ');
}

// SOLUTION 2B: ES6 arrow function alternative
const highAndLow = numbers => {
  const sortedNums = numbers.split(' ').sort((a, b) => a - b);
  return [sortedNums[sortedNums.length - 1], sortedNums[0]].join(' ');
}

// SOLUTION 3A: Extracting the max and min number
function highAndLow(numbers){
  const numArr = numbers.split(' ');
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

// SOLUTION 3B: ES6 arrow function alternative
const highAndLow = numbers => {
  const numArr = numbers.split(' ');
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}