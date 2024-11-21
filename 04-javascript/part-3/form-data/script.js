const form = document.getElementById("form");

function onSubmit(e) {
  e.preventDefault();

  const inputValue = document.getElementById("input").value;
  const selectValue = document.getElementById("select").value;
  const checkboxValue = document.getElementById("checkbox").checked;

  if (inputValue === "" || selectValue === "0") {
    alert("Fill the forms");
    return;
  }

  console.log(inputValue, selectValue, checkboxValue);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const inputValue = formData.get("input");
  const selectValue = formData.get("select");
  let checkboxValue = false;
  if (formData.get("checkbox") == "on") {
    checkboxValue = "true";
  }

  if (inputValue === "" || selectValue === "0") {
    alert("Fill the forms");
    return;
  }

  // const entries = formData.entries();
  // console.log(entries);
  // for (let entry of entries) {
  //   console.log(entry);
  // }

  console.log(inputValue, selectValue, checkboxValue);
}

form.addEventListener("submit", onSubmit2);
