/* INSTRUCTIONS:
   Description:
   Make a simple function called greet that returns the most-famous "hello world!".

   Style Points
   Sure, this is about as easy as it gets. 
   But how clever can you be to create the most creative hello world you can think of? 
   What is a "hello world" solution you would want to show your friends?
*/ 

// SOLUTION 1A: basic implementation
function greet() {
  return "hello world!";
} 

// SOLUTION 1B: ES6 arrow function alternative
const greet = () => "hello world!";

// SOLUTION 2A: joining characters
function greet() {
  const chars = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"];
  return chars.join('');
}

// SOLUTION 2B: ES6 arrow function alternative
const greet = () => {
  const chars = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"];
  return chars.join('');
}

// SOLUTION 3A: template literal
function greet() {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return `${alphabet[7]}${alphabet[4]}${alphabet[11]}${alphabet[11]}${alphabet[14]} ${alphabet[22]}${alphabet[14]}${alphabet[17]}${alphabet[11]}${alphabet[3]}!`; 
}

// SOLUTION 3B: ES6 arrow function alternative
const greet = () => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return `${alphabet[7]}${alphabet[4]}${alphabet[11]}${alphabet[11]}${alphabet[14]} ${alphabet[22]}${alphabet[14]}${alphabet[17]}${alphabet[11]}${alphabet[3]}!`; 
}