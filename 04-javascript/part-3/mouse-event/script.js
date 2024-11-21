const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
  console.log("click");
}
function dblclick() {
  console.log("dblclick");
}
function contextmenu() {
  console.log("contextmenu");
}
function mousedown() {
  console.log("mousedown");
}
function mouseenter() {
  console.log("mouseenter");
}
function mousemove() {
  console.log("mousemove");
}

function onDrag() {
  console.log("onDrag");
}

function onDragStart() {
  console.log("dragStart");
}

function onDragEnd() {
  console.log("dragEnd");
}

div.addEventListener("click", onClick);
div.addEventListener("dblclick", dblclick);
div.addEventListener("contextmenu", contextmenu);
div.addEventListener("mousedown", mousedown);
div.addEventListener("mouseenter", mouseenter);
div.addEventListener("mousemove", mousemove);
img.addEventListener("drag", onDrag);
img.addEventListener("dragstart", onDragStart);
img.addEventListener("dragend", onDragEnd);
