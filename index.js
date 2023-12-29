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

  errorDisplay.innerText = "";
}

function EmptyFieldCheck(target) {
  let data = target.value;

  if ((data = "")) {
    setError(target, "Field required");
  }
}

function cardNameInput(element) {
  let cardName = document.querySelector(".card-name");

  // let cardNameValue = element.value
  cardName.innerText = element.value;

  if (cardName.innerText.length == 0){
    cardName.innerText = "Test Name";
  }
}

function cardNumberInput(element) {
  let cardNumbervalue = document.querySelector(".card-num");
  let cardNum = element.value.replace(/\D/g, "");
  if (cardNum.length > 0) {
    cardNum = cardNum.slice(0, 16);
    cardNum = cardNum.match(/.{1,4}/g).join(" ");
  }
  element.value = cardNum;
  cardNumbervalue.innerText = cardNum;
  if (cardNumbervalue.innerText.length == 0){
    cardNumbervalue.innerText = "0000 0000 0000 0000";
  }
}

function cardExpiryMonthInput(element) {
  let expiryDate = document.querySelector('.month')
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  expiryDate.innerText = elementData;

  if (expiryDate.innerText.length == 0){
    expiryDate.innerText = "00";
  }
}

function cardExpiryYearInput(element) {
  let expiryYear = document.querySelector('.year')
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  expiryYear.innerText = elementData;

  if (expiryYear.innerText.length == 0){
    expiryYear.innerText = "00";
  }
}

function cvcInput(element) {
  let cvcNumber = document.querySelector('.cvc-number');
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  cvcNumber.innerText = elementData;
  if (cvcNumber.innerText.length == 0){
    cvcNumber.innerText = "000";
  }
}
