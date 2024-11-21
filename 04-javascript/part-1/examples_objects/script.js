let order1 = {
  Id: 101,
  customerId: 12,
  date: "21.11.2024",
  paymentType: "credit card",
  address: {
    city: "city",
    street: "street",
    apartmentNo: "no",
  },
  products: [
    {
      productId: 5,
      productName: "Iphone 16",
      productUrl: "https://www.google.com",
      price: 70000,
    },
    {
      productId: 6,
      productName: "Iphone 15",
      productUrl: "https://www.google.com",
      price: 60000,
    },
  ],
};

let order2 = {
  Id: 102,
  customerId: 12,
  date: "21.11.2025",
  paymentType: "credit card",
  address: {
    city: "city",
    street: "street",
    apartmentNo: "no",
  },
  products: [
    {
      productId: 5,
      productName: "Iphone 16",
      productUrl: "https://www.google.com",
      price: 70000,
    },
  ],
};

console.log(order1);
console.log(order2);

let total1 = order1.products[0].price + order1.products[1].price;
let total2 = order1.products[0].price;

let result;

result = total1;

console.log(result);
