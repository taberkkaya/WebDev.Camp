//function constructor
function Product(title, desc, price, stock) {
  //prop
  this.title = title;
  this.desc = desc;
  this.price = price;
  this.stock = stock;
  //method
  this.display = function () {
    return `title:${this.title}, desc:${this.desc}, price:${this.price}`;
  };

  this.is_active = function () {
    return this.stock > 0 ? true : false;
  };
}

//object
const p1 = new Product("Samsung S24", "Phone", 1000, 15);
const p2 = new Product("Samsung S23", "Phone", 990, -1);

console.log(p1.display());
console.log(p2.is_active());
