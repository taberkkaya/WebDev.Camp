function replaceItem1() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.textContent = "Updated Item";

  firstItem.replaceWith(li);
}

function replaceItem2() {
  const secondItem = document.querySelector("li:nth-child(2)");
  // secondItem.innerHTML = "Updated Item 2";
  secondItem.outerHTML = "<li>Updated Item 2</li>";
}

function replaceAllItem() {
  const all = document.querySelectorAll("li");

  for (let i = 0; all.length; i++) {
    if (i == 1) {
      all[i].innerHTML = "Second Items";
    } else {
      all[i].innerHTML = "Updated Items";
    }
  }
}

replaceItem1();
replaceItem2();
replaceAllItem();
