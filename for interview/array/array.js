// Reference: https://youtu.be/PQAuy0e0TFg

//version 1
let a1 = Array.from({
  length: 5
}, n => Math.random());
console.log('1', a1);

//version 2
let a2 = new Array(5).fill(1).map(n => Math.random());
console.log('2', a2);


