/* INSTRUCTIONS:
   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

   Example
   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
   
   The returned format must be correct in order to complete this challenge.
   Don't forget the space after the closing parentheses!
*/ 

// SOLUTION 1A
function createPhoneNumber(numbers){
  const str = numbers.join('');
  return '(' + str.slice(0, 3) + ') ' + str.slice(3, 6) + '-' + str.slice(6);
}

// SOLUTION 1B: ES6 arrow function alternative
const createPhoneNumber = numbers => {
  const str = numbers.join('');
  return '(' + str.slice(0, 3) + ') ' + str.slice(3, 6) + '-' + str.slice(6);
}

// SOLUTION 2A
function createPhoneNumber(numbers){
  let phoneNumber = '(xxx) xxx-xxxx';
  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace('x', numbers[i])
  }
  return phoneNumber;
}

// SOLUTION 2B: ES6 arrow function alternative
const createPhoneNumber = numbers => {
  let phoneNumber = '(xxx) xxx-xxxx';
  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace('x', numbers[i])
  }
  return phoneNumber;
}

// SOLUTION 3A
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(....)/, '($1) $2-$3')
}

// SOLUTION 3B: ES6 arrow function alternative
const createPhoneNumber = numbers => numbers.join('').replace(/(...)(...)(....)/, '($1) $2-$3');