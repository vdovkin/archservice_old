const form = document.getElementById("mainForm");
const checkBox = document.getElementById("customgrid");
const lenghtblock = document.getElementById("lenghtblock");
const stepblock = document.getElementById("stepblock");
const grid = document.getElementById("grid");
const lenght = document.getElementById("lenght");
const step = document.getElementById("step");

//Show input error mesage
function showError(input, message) {
  const formElement = input.parentElement;
  formElement.className = "form-element error";
  const small = formElement.querySelector("small");
  small.innerText = message;
}

//In case of success don't show error
function showSuccess(input) {
  const formElement = input.parentElement;
  formElement.className = "form-element";
}

function showGridSelection() {
  // If the checkbox is checked, display
  if (checkBox.checked === true) {
    lenghtblock.style.display = "block";
    stepblock.style.display = "block";
    grid.style.display = "none";
  } else {
    lenghtblock.style.display = "none";
    stepblock.style.display = "none";
    grid.style.display = "block";
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() == "") {
      showError(input, "Поле обов'язкове для заповнення");
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// validate values
function invalidValues(input, min, max) {
  let invalid = true;
  if (parseFloat(input.value) < min) {
    showError(input, `Маэ бути більше за ${min} м.`);
  } else if (parseFloat(input.value) > max) {
    showError(input, `Маэ бути менше за ${max} м.`);
  } else {
    showSuccess(input);
    invalid = false;
  }
  return invalid;
}

function validateForm() {
  if (checkBox.checked === true) {
    if (checkRequired([lenght, step])) {
      return false;
    }

    let arrValuesCheck = [
      invalidValues(lenght, 3, 24),
      invalidValues(step, 3, 24),
    ];

    let validation = arrValuesCheck.every(function (result) {
      return result == false;
    });

    return validation;
  }
}
