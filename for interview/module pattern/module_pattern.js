// Reference: https://youtu.be/e0u8z-9aAEw

//revealing module pattern
//Turn this object literal into a module that only exposes the render method

/*
let myModule = {
  data: [],
  render: () => {
    
  },
  add: () => {

  },
  remove: () => {

  }
};
*/

let myModule = (function(){
  const data = [];

  const render = () => {
    add();
    add();
    remove();
    console.log(data);
  };
  const add = () => {
    data.push("string");
  };
  const remove = () => {
    data.pop();
  };

  return {
    render,
  }
})();

myModule.render();
