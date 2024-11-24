function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 5);
const rect2 = new Rectangle("Rectangle 2", 20, 15);
const rect3 = new Rectangle("Rectangle 3", 5, 3);

//add prop
rect1.color = "Red";

console.log(rect1);
console.log(rect2);

//remove prop
delete rect1.color;

console.log(rect1.hasOwnProperty("color"));

console.log(rect1.area());
console.log(rect2.area());

//get keys
console.log(Object.keys(rect1));

//get values
console.log(Object.values(rect1));

//get entities
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== "function") {
    console.log(key, value);
  }
}
