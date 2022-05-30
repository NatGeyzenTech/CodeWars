/* INSTRUCTIONS:
   Consider an array/list of sheep where some sheep may be missing from their place. 
   We need a function that counts the number of sheep present in the array (true means present).
   Example: 
   [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false,
    true,  false, false, true , true,  true,  true,  true , false, false, true,  true]
   The correct answer would be 17.
   Hint: Don't forget to check for bad values like null/undefined
*/ 

// SOLUTION 1A: Using a for loop
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) {
            count++;
        }
    }
    return count;
}

// SOLUTION 1B: ES6 arrow function alternative
const countSheeps = arrayOfSheep => {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) {
            count++;
        }
    }
    return count;
}

// SOLUTION 2A: Using a forEach loop
function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count);
    return count;
}

// SOLUTION 2B: ES6 arrow function alternative
const countSheeps = arrayOfSheep => {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count);
    return count;
}

// SOLUTION 3A: Using filter() array method and length property
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep).length;
}

// SOLUTION 3B: ES6 arrow function alternative
const countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep).length;