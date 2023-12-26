const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const expiryMonth = document.getElementById("exp-month");
const expiryYear = document.getElementById("exp-year");

function validateData() {}

function setError(element, message) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector(".error");

  errorDisplay.innerText = message;
}

function removeError(element) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector(".error");

  errorDisplay.innerText = '';
}

function EmptyFieldCheck(target) {
  let data = target.value;

  if ((data = "")) {
    setError(target, "Field required");
  }
}

function nameInput() {}

function cardNumberInput(element) {
  let cardNum = element.value.replace(/\D/g, "");
  if (cardNum.length > 0) {
    cardNum = cardNum.slice(0, 16);
    cardNum = cardNum.match(/.{1,4}/g).join(" ");
  }
  element.value = cardNum;
}

function numberInput(element){
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
}
