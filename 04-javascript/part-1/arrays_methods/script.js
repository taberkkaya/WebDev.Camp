let students = ["Ataberk", "Ata", "Berk"];

let result;

result = students.length;
result = students.toString();
result = students.join(" ");
result = students.pop();
result = students.shift();

result = students.push("Kaya");
result = students.unshift("Kaya");
result = students.shift();

result = students.indexOf("Ata");
result = students.indexOf("Ataberk");

result = students.push("Ata");
result = students.lastIndexOf("Ata");

result = students.includes("Kaya");
result = students.includes("Ataberk Kaya");

result = students.splice(0, 1); //remove
result = students.splice(0, 1, "Ata Kaya", "Ataberk Kaya"); //add

console.log(result);
console.log(students);
