/* INSTRUCTIONS:
   You get an array of numbers, return the sum of all of the positives ones.
   Example [1,-4,7,12] => 1 + 7 + 12 = 20
   Note: if there is nothing to sum, the sum is default to 0.
*/ 

// SOLUTION 1A: Using a FOR loop
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// SOLUTION 1B: ES6 arrow function alternative
const positiveSum = arr => {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// SOLUTION 2A: Using filter() and reduce() array methods
function positiveSum(arr) {
    return arr.filter(num => num > 0)                   
              .reduce((sum, curr) => sum += curr, 0);     
}

// SOLUTION 2B: ES6 arrow function alternative
const positiveSum = arr => 
    arr.filter(num => num > 0)
       .reduce((sum, curr) => sum += curr, 0); 

// SOLUTION 3A: Using  reduce() array method only
function positiveSum(arr) {
    return arr.reduce((sum, curr) => curr > 0 ? sum += curr : 0, 0);     
}

// SOLUTION 3B: ES6 arrow function alternative
const positiveSum = arr => 
    arr.reduce((sum, curr) => curr > 0 ? sum += curr : 0, 0);     