// Reference: https://www.youtube.com/watch?v=yWIDSSi7gOE

/**
 * Write a function to determine if a number is an integer
 */

 let isInt = function (num) {
   // return num - parseInt(num) === 0;
   return (!isNaN(num) && parseInt(num) === num);
}
console.log(3, isInt(3)); // true
console.log(3.5, isInt(3.5)); // false
console.log(1.00000, isInt(1.00000)); // true

