const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const category = document.getElementById("category");
const question = document.getElementById("question");

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

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "E-mail не дійсний");
    return false;
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "Поле обов'язкове для заповнення");
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Має бути хоча б ${min} символів`);
  } else if (input.value.length > max) {
    showError(input, `Має бути хоча б ${max} символів`);
  } else {
    showSuccess(input);
  }
}

// Check selected category
function checkCategory(input) {
  if (input.value.trim() === "") {
    showError(input, "Виберіть категорію");
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!checkRequired([name, email, question])) {
    checkCategory(category);
    checkLength(name, 5, 30);
    checkLength(question, 10, 2000);
    checkEmail(email);
  }
});
