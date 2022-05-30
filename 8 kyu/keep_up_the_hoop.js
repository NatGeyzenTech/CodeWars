/* INSTRUCTIONS:
   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
   Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
   - If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
   - If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/ 

// SOLUTION 1A: Using if/else statements
function hoopCount (n) {
    if (n >= 10) {
      return "Great, now move on to tricks";
    } else {
      return "Keep at it until you get it";
    }
}

// SOLUTION 1B: ES6 arrow function alternative
const hoopCount = n => {
    if (n >= 10) {
      return "Great, now move on to tricks";
    } else {
      return "Keep at it until you get it";
    }
}

// SOLUTION 2A: Using a conditional ternary operator
function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

// SOLUTION 2B: ES6 arrow function alternative
const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

// SOLUTION 3A: Handling errors with if/else if/else
function hoopCount (n) {
    if (n >= 10) {
      return "Great, now move on to tricks";
    } else if (n < 10 && n >= 0) {
      return "Keep at it until you get it";
    } else {
        return "Invalid input"
    }
}

// SOLUTION 3B: ES6 arrow function alternative
const hoopCount = n => {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else if (n < 10 && n >= 0) {
        return "Keep at it until you get it";
    } else {
        return "Invalid input"
    }
}