// let product1 = "S22";
// let product2 = "S23";
// let product3 = "S24";

let products = ["S22", "S23", "S24"];
let prices = [300, 300, 300];
let colors = ["black", "white", "black"];

let result;

result = `${products[0]} ${prices[0]} ${colors[0]}`;
result = `${products[1]} ${prices[1]} ${colors[1]}`;
result = `${products[2]} ${prices[2]} ${colors[2]}`;

// let product1 = ["S22", 300, "gold"];
// result = `${product1[0]} ${product1[1]} ${product1[2]}`;

let product1 = ["S22", 300, ["black", "white", "black"]];
product1[0] = "Samsung S23";

result = `${product1[0]} ${product1[1]} ${product1[2][0]}`;

console.log(result);
