/* INSTRUCTIONS:
   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

   Examples:
   solution('abc', 'bc') // returns true
   solution('abc', 'd') // returns false
*/ 

// SOLUTION 1A
function solution(str, ending){
  return str.endsWith(ending);
}

// SOLUTION 1B: ES6 arrow function alternative
const solution = (str, ending) => str.endsWith(ending);


// SOLUTION 2A
function solution(str, ending){
  return str.slice(str.length - ending.length) === ending;
}

// SOLUTION 2B: ES6 arrow function alternative
const solution = (str, ending) => str.slice(str.length - ending.length) === ending;


// SOLUTION 3A
function solution(str, ending){
  return str.indexOf(ending, str.length - ending.length) !== -1;
}

// SOLUTION 3B: ES6 arrow function alternative
const solution = (str, ending) => str.indexOf(ending, str.length - ending.length) !== -1;