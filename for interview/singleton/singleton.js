// Reference: https://youtu.be/VlTlAAOBlzI

/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

 let obj = (function () {
  let objInstance; //private variable
  function create() { //private function to create methods and properties
    return { 
      value: "test" 
    };
  }
  function getInstance() {
    if (!objInstance) objInstance = create();
    return objInstance;
  }
  return {
    getInstance,
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

console.log(obj1);
console.log(obj2);

obj1.value = "Hello";

console.log(obj1);
console.log(obj2);
