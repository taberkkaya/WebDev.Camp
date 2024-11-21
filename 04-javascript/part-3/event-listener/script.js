const message = document.getElementById("message");
const button = document.querySelector("button");
const buttonContainer = document.querySelector("#buttons");

function showMessage() {
  console.log(message.value);
  message.value = "";
}

function showMessage2() {
  console.log("Message2");
}

button.addEventListener("click", showMessage);
button.addEventListener("click", showMessage2);

for (let i = 0; i <= 5; i++) {
  let button = document.createElement("button");
  button.id = "btn" + i;
  button.innerText = "btn" + i;

  button.addEventListener("click", showMessage);
  buttonContainer.appendChild(button);
}

document.getElementById("btn1").removeEventListener("click", showMessage);
