/* INSTRUCTIONS:
   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

   Examples (Input -> Output):
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
    * 
    Good Luck!
*/ 

// SOLUTION 1A: Using a for loop
function doubleChar(str) {
    let doubleString = '';
    for (let i = 0; i < str.length; i++) {
      doubleString += str[i] + str[i]
    }
    return doubleString;
}

// SOLUTION 1B: ES6 arrow function alternative
const doubleChar = str => {
    let doubleString = '';
    for (let i = 0; i < str.length; i++) {
      doubleString += str[i] + str[i]
    }
    return doubleString;
}


// SOLUTION 2A: Turning string into array
function doubleChar(str) {
    return str.split('')
              .map(char => char.repeat(2))
              .join('');
}

// SOLUTION 2B: ES6 arrow function alternative
const doubleChar = str => str.split('').map(char => char.repeat(2)).join('');

// SOLUTION 3A: Using regex
function doubleChar(str) {
    return str.replace(/(.)/g, '$1$1');
}

// SOLUTION 3B: ES6 arrow function alternative
const doubleChar = str => str.replace(/(.)/g, '$1$1');