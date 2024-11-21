let result;

result = 10;
result = "10";
result = Number("10");

result = parseInt("10.7");
result = parseFloat("10.7");

result = parseInt("10a1");
result = parseInt("a1");

result = isNaN("a1"); // is not a number?
result = Number.isInteger(10.5);

console.log(typeof result);
console.log(result);

let number = 10.123555;

result2 = number.toPrecision(5);
result2 = number.toFixed(5);
result2 = Math.round(2.6);
result2 = Math.ceil(2.1);
result2 = Math.floor(2.9);
result2 = Math.sqrt(25);
result2 = Math.pow(2, 5);
result2 = Math.min(1, 2, 3, 4, 5, 6, 7, 8);
result2 = Math.max(1, 2, 3, 4, 5, 6, 7, 8);

result2 = Math.random() * 10 + 1;
result2 = Math.floor(Math.random() * 100 + 1);

console.log(typeof result2);
console.log(result2);
