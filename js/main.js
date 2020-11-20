const mainForm = document.getElementById("mainForm");
const checkBox = document.getElementById("customgrid");
const lenghtblock = document.getElementById("lenghtblock");
const stepblock = document.getElementById("stepblock");
const grid = document.getElementById("grid");
const lenght = document.getElementById("lenght");

function showGridSelection() {
  // If the checkbox is checked, display
  if (checkBox.checked == true) {
    lenghtblock.style.display = "block";
    stepblock.style.display = "block";
    grid.style.display = "none";
  } else {
    lenghtblock.style.display = "none";
    stepblock.style.display = "none";
    grid.style.display = "block";
  }
}

function saveValues() {
  if (checkBox.checked == true) {
    localStorage.setItem("length", lenght.value);
  }
}
