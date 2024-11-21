// var courseName = "     WebDev.Camp"; //trim
var courseName = "WebDev.Camp";
var result;

result = courseName.toLocaleLowerCase();
result = courseName.toUpperCase();
result = courseName.length;
result = courseName[3];
result = courseName.slice(0, 4);
result = courseName.slice(4);
result = courseName.slice(-4, -2);
result = courseName.substring(0, 6);
result = courseName.replace("Dev", "Development");
result = courseName.trim();
result = courseName.trimEnd();
result = courseName.trimStart();
result = courseName.indexOf("Web");
result = courseName.split(".");
result = courseName.split(".")[0];
result = courseName.split(".")[1];

console.log(result);
