/* INSTRUCTIONS:
   You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
   Considering these factors, write a function that tells you if it is possible to get to the pump or not.
   Function should return true if it is possible and false if not.
*/ 

// SOLUTION 1A: Returning true or false with if/else statement
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  if (mpg * fuelLeft >= distanceToPump) return true;
  else return false;
};

// SOLUTION 1B: ES6 arrow function alternative
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) return true;
  else return false;
};

// SOLUTION 2A: returning true or false with ternary operator
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

// SOLUTION 2B: ES6 arrow function alternative
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? true : false;

// SOLUTION 3A: Returning conditional statement
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump;
};

// SOLUTION 3B: ES6 arrow function alternative
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;