// Reference: https://www.youtube.com/watch?v=7CDUeZh5OCE&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=10

// Generate Random Hex Colour Values


function colour() {
  // const c = Math.random();
  // console.log(c);
  // const c = 0.0;

  // const str = c.toString(16);
  // console.log(str);
  // console.log(str.substring(2, 8));

  return '#' + Math.random().toString(16).substring(2, 8);
}


function colour2() {
  // const c = parseInt(Math.random() * 16000);
  // const a = c % 16
  // console.log(c);
  // console.log(a);
  // console.log(a.toString(16));
  // const array = new Array(6).fill(1).map(v => (parseInt(Math.random() * 16000) % 16).toString(16)).join('');
  // console.log(array);

  return '#' + new Array(6).fill(1).map(v => (parseInt(Math.random() * 16000) % 16).toString(16)).join('');
}

console.log(colour());
console.log(colour2());