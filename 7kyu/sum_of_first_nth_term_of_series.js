/* INSTRUCTIONS:
   Your task is to write a function which returns the sum of following series upto nth term(parameter).

   Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

   Rules:
   - You need to round the answer to 2 decimal places and return it as String.
   - If the given value is 0 then it should return 0.00
   - You will only be given Natural Numbers as arguments.

   Examples:(Input --> Output)
   1 --> 1 --> "1.00"
   2 --> 1 + 1/4 --> "1.25"
   5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/ 

// SOLUTION 1A: Looping n times to add to the sum
function SeriesSum(n) {
   let sum = 0;
   for (let i = 0; i < n; i++) {
     sum += 1 / (3 * i + 1);
   }
   return sum.toFixed(2);
}

// SOLUTION 1B: ES6 arrow function alternative
const SeriesSum = n => {
   let sum = 0;
   for (let i = 0; i < n; i++) {
     sum += 1 / (3 * i + 1);
   }
   return sum.toFixed(2);
}

// SOLUTION 2A: Creating an array of n length and reducing it to the sum
function SeriesSum(n) {
   return [...Array(n)].reduce((sum, curr, i) => sum + 1 / (3 * i + 1), 0).toFixed(2);
}

// SOLUTION 2B: ES6 arrow function alternative
const SeriesSum = n => [...Array(n)].reduce((sum, curr, i) => sum + 1 / (3 * i + 1), 0).toFixed(2);

// SOLUTION 3A: Recursively calculating the sum
function SeriesSum(n, sum = 0) {
   return n === 0 ? sum.toFixed(2) : SeriesSum(n - 1, sum += 1 / (3 * n - 2));
}

// SOLUTION 3B: ES6 arrow function alternative
const SeriesSum = (n, sum = 0) => n === 0 ? sum.toFixed(2) : SeriesSum(n - 1, sum += 1 / (3 * n - 2));