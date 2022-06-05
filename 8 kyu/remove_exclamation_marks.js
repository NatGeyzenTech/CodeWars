/* INSTRUCTIONS:
   Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/ 

// SOLUTION 1A: Using a for loop
function removeExclamationMarks(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
        newString += s[i]
      }
    }
    return newString;
}

// SOLUTION 1B: ES6 arrow function alternative
const removeExclamationMarks = s => {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
        newString += s[i]
      }
    }
    return newString;
}

// SOLUTION 2A: Turning string into array
function removeExclamationMarks (s) {
    return s.split('').filter(char => char !== '!').join('');
}

// SOLUTION 2B: ES6 arrow function alternative
const removeExclamationMarks = s => s.split('').filter(char => char !== '!').join('');

// SOLUTION 3A: Using .replace() with regex
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

// SOLUTION 3B: ES6 arrow function alternative
const removeExclamationMarks = s => s.replace(/!/g, '');