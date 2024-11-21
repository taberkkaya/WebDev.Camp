let array = ["a", "b", "c", "d"];

let result;

result = array.length;

result = array[0];
result = array[array.length - 1];

result = array.indexOf("d");
result = array.includes("d");

array.push("e");
array[array.length] = "f";
array.splice(array.length, 1, "g");

array.pop();
array.pop();
array.splice(array.length - 2, 2);

let student1 = ["Ataberk", "Kaya", 2004, [60, 70, 80, 90, 100]];
let student2 = ["Ata", "Kaya", 2001, [20, 70, 20, 90, 800]];
let student3 = ["Ata", "Berk", 2005, [60, 10, 80, 90, 100]];
let student4 = ["Berk", "Kaya", 2009, [60, 70, 10, 90, 700]];

let students = [student1, student2, student3, student4];

console.log(2025 - students[1][2]);

console.log(result);
console.log(array);
