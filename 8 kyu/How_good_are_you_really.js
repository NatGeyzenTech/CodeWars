/* INSTRUCTIONS:
   There was a test in your class and you passed it. Congratulations!
   But you're an ambitious person. You want to know if you're better than the average student in your class.
   You receive an array with your peers' test scores. Now calculate the average and compare your score!
   Return True if you're better, else False!
   
   Note:
   Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/ 

// SOLUTION 1A: Using a for loop
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  return yourPoints > (sum / classPoints.length);
}

// SOLUTION 1B: ES6 arrow function alternative
const betterThanAverage = (classPoints, yourPoints) => {
  classPoints.push(yourPoints);
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  return yourPoints > (sum / classPoints.length);
}

// SOLUTION 2A: Using .reduce() method
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  const sum = classPoints.reduce((sum, curr) => sum + curr, 0);
  return yourPoints > (sum / classPoints.length);
}

// SOLUTION 2B: ES6 arrow function alternative
const betterThanAverag = (classPoints, yourPoints) => {
  classPoints.push(yourPoints);
  const sum = classPoints.reduce((sum, curr) => sum + curr, 0);
  const average = sum / classPoints.length;
  return yourPoints > average;
}

// SOLUTION 3A: one line solution
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > [yourPoints, ...classPoints].reduce((acc,val) => acc + val) / (classPoints.length + 1);
}

// SOLUTION 3B: ES6 arrow function alternative
const betterThanAverage = (classPoints, yourPoints) => yourPoints > [yourPoints, ...classPoints].reduce((acc,val) => acc + val) / (classPoints.length + 1);
