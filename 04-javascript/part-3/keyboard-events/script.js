const input = document.getElementById("text");

function onKeyPress() {
  console.log("keypress");
}
function onKeyUp() {
  console.log("keyup");
}

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);

function onKeyDown(e) {
  // console.log(e);
  // console.log(e.key);
  // document.querySelector("h2").innerText += e.key;

  // if (e.key == "Enter") {
  //   alert("Enter");
  // }

  // if (e.keyCode == 13) {
  //   alert("Enter");
  // }

  // if (e.repeat) {
  //   alert(`${e.key}`);
  // }

  if (e.ctrlKey && e.key === "a") {
    alert("!");
  }
}
input.addEventListener("keydown", onKeyDown);
