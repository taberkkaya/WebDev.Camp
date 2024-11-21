let result;

result = document.getElementsByClassName("item");

// const items = document.getElementsByClassName("item");
const group1 = document.getElementById("group1");
// const items = group1.getElementsByTagName("li");

// const items = document.querySelectorAll("li");
// const items = document.querySelectorAll(".item");
const items = document.querySelectorAll("#group1 .item");

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (let item of items) {
  //   console.log(item);
  item.style.color = "red";
  item.style.fontSize = "20px";
  item.innerText = "item";
}

console.log(result);
