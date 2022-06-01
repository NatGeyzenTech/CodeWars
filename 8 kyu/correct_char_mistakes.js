/* INSTRUCTIONS:
   Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
   When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
   Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
   - S is misinterpreted as 5
   - O is misinterpreted as 0
   - I is misinterpreted as 1
   The test cases contain numbers only by mistake.
*/ 

// SOLUTION 1A: Creating a new string from an array
function correct(string) {
    const arr = [];
    string.split('').forEach(char => {
      if (char === '5') { arr.push('S'); } 
      else if (char === '0') { arr.push('O'); } 
      else if (char === '1') { arr.push('I'); } 
      else { arr.push(char); }
    });
    return arr.join('');
};

// SOLUTION 1B: ES6 arrow function alternative
const correct = string => {
    const arr = [];
    string.split('').forEach(char => {
      if (char === '5') { arr.push('S'); } 
      else if (char === '0') { arr.push('O'); } 
      else if (char === '1') { arr.push('I'); } 
      else { arr.push(char); }
    });
    return arr.join('');
};

// SOLUTION 2A: Replacing each character separately
function correct(string) {
    return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
};

// SOLUTION 2B: ES6 arrow function alternative
const correct =string => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');

// SOLUTION 3A: Replacing each character separately
function correct(string) {
    const chars = { '5': 'S', '0': 'O', '1': 'I' };
    return string.replace(/[501]/g, key => chars[key]);
}

// SOLUTION 3B: ES6 arrow function alternative
const correct = string => {
    const chars = { '5': 'S', '0': 'O', '1': 'I' };
    return string.replace(/[501]/g, key => chars[key]);
}