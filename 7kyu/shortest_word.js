/* INSTRUCTIONS:
   Simple, given a string of words, return the length of the shortest word(s).
   String will never be empty and you do not need to account for different data types.
*/ 

// SOLUTION 1A: Using a for loop
function findShort(s){
  const arr = s.split(' ');
  let length = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < length) length = arr[i].length;
  }
  return length;
}

// SOLUTION 1B: ES6 arrow function alternative
const findShort = s => {
  const arr = s.split(' ');
  let length = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < length) length = arr[i].length;
  }
  return length;
}
// SOLUTION 2A: Sorting the words by words length
function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

// SOLUTION 2B: ES6 arrow function alternative
const findShort = s => s.split(' ').sort((a, b) => a.length - b.length)[0].length;

// SOLUTION 3A: Finding the min in an array of word lengths
function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length));
}

// SOLUTION 3B: ES6 arrow function alternative
const findShort = s => Math.min(...s.split(' ').map(word => word.length));