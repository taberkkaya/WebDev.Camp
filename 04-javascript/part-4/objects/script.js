//object

const product = {
  title: "Samsung S24",
  desc: "Phone",
  price: 1000,
  stock: 100,

  //methods
  display: function () {
    return `title:${this.title}, desc:${this.desc}, price:${this.price}`;
  },

  is_active: function () {
    return this.stock > 0 ? true : false;
  },
};

console.log(product.desc);
console.log(product.display());
console.log(product.is_active());
