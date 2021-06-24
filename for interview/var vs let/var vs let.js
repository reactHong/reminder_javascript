// Reference: https://www.youtube.com/watch?v=7CDUeZh5OCE&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=10

//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
  // area: undefined - let area = undefined
  // name: not defined, not assign any default value - let name;

  if (area === undefined)       console.log('var', area);
  
  // console.log(abcd);
  console.log(typeof abcd);
  if (typeof abcd === 'undefined') console.log('abcd is not defined')
  
  // Reference Error - because name is used in Temporal Dead Zone
  if (typeof name == 'undefined') console.log('name is not defined');
  console.log('let', name);
  name = 'Bert';

  let name = 'Bert';
  var area = 'Geology';
}
f();