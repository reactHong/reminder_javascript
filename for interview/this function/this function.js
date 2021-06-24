// Reference: https://www.youtube.com/watch?v=DlN8ECKjaJw&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=14

// Using `this` inside an object
// The object has functions created three different ways 
// What will be the result of the three log statements?

const circle = {
  radius: 10,
  circumference: function () {
      return (2 * Math.PI * this.radius);
  },
  diameter() {
      return (this.radius * 2);
  },
  area: () => {
      return (Math.PI * Math.PI * this.radius);
  }
}
console.log(circle.area()); // NaN
console.log(circle.diameter()); // 20 
console.log(circle.circumference()); // 62.83185307179586
