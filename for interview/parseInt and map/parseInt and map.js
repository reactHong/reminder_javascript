// Reference: https://www.youtube.com/watch?v=U0WewGAnhNg&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=12

//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

// parseInt(num, radix); // default radix 10
// myarray.map((val, idx, arr) => { })

let result = ['1', '7', '11'].map(parseInt); //returns [1, NaN, 3]
// 1. '1, 0 - default 10 radix
// 2. '7', 1 - 1 is ok as the radix 7 is illegal ... NaN
// 3. '11', 2 - binary as the radix 00000011 .. in decimal is 3.

console.log(result);

let result1 = ['1', '7', '11'].map(v => parseInt(v)); //returns [1, 7, 11]

console.log(result1);

