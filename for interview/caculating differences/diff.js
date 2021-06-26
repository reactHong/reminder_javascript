// Reference: https://www.youtube.com/watch?v=tM40K-JO_tA

/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

 let numbers = [12, 2, 6, 5, 5, 5, 5, 5, 9, 10, 10, 10, 10, 33];

 let difference = (function (arr) {
   // NOTE: remove duplicates with Set first for the performance
  const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  return sorted[sorted.length-1] - sorted[0];
 })(numbers);
 
 console.log(difference);