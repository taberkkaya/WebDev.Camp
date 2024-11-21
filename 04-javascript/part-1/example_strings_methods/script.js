let url = "https://www.taberkkaya.com";
let courseName = "WebDev.Camp";

let result;

result = url.length;
result = courseName.split(".");

result = url.startsWith("https");
result = url.endsWith("https");
result = courseName.indexOf("Course");
result = courseName.indexOf("Camp");

courseName = courseName.toLowerCase();
courseName = courseName.replace(".", "-");
url = `${url}/${courseName}`;
result = url;
console.log(result);
