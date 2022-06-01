/* INSTRUCTIONS:
   You ask a small girl,"How old are you?" She always says, "x years old", where x
   is a random number between 0 and 9.

   Write a program that returns the girl's age (0-9) as an integer.

   Assume the test input string is always a valid string. For example, 
   the test input may be "1 year old" or "5 years old". 
   The first character in the string is always a number.
*/ 

// SOLUTION 1A: Using parseIst() and slice()
function getAge(inputString){
    return parseInt(inputString.slice(0, 1));
}

// SOLUTION 1B: ES6 arrow function alternative
const getAge = inputString => parseInt(inputString.slice(0, 1));

// SOLUTION 2A: Using Number() and charAt()
function getAge(inputString){
    return Number(inputString.charAt(0));
}

// SOLUTION 2B: ES6 arrow function alternative
const getAge = inputString => Number(inputString.charAt(0));

// SOLUTION 3A: Using the unary operator and regex
function getAge(inputString){
    return +inputString.match(/\d/);
}

// SOLUTION 3B: ES6 arrow function alternative
const getAge = inputString => +inputString.match(/\d/);