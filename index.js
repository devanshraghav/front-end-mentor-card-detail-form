const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const expiryMonth = document.getElementById("exp-month");
const expiryYear = document.getElementById("exp-year");
const cvc = document.getElementById("cvc");

let validData = false;

document.getElementById("form-submit").addEventListener("submit", (e) => {
  e.preventDefault();

  validateData();

  if (validData) {
    document.getElementById("form-submit").style.display = "none";
    document.querySelector(".complete-state").style.display = "flex";
  }
});

function validateData() {
  EmptyFieldCheck(cardName);
  EmptyFieldCheck(cardNumber);
  month_year_EmptyFieldCheck(expiryMonth);
  month_year_EmptyFieldCheck(expiryYear);
  EmptyFieldCheck(cvc);
  cardExpiryMonthInput(expiryMonth);
  if (validData) {
    checkCardNumberLength();
  }
}

function setError(element, message) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector(".error");

  element.classList.add("errorBorder");

  errorDisplay.innerText = message;

  validData = false;
}

function setMonthYearExpiryError(element,message){
  const parent = element.parentElement.parentElement;
  const errorDisplay = parent.querySelector(".error");

  element.classList.add("errorBorder");

  errorDisplay.innerText = message;

  validData = false;
}

function removeError(element) {
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector(".error");

  errorDisplay.innerText = "";
  element.classList.remove("errorBorder");
  validData = true;
}

function removeMonthYearError(element) {
  const parent = element.parentElement.parentElement;

  const errorDisplay = parent.querySelector(".error");

  errorDisplay.innerText = "";
  element.classList.remove("errorBorder");
  validData = true;
  
  
}

function EmptyFieldCheck(target) {
  let data = target.value;

  if (data.length == 0) {
    setError(target, "Can't be blank");
  }
}
function month_year_EmptyFieldCheck(target) {
  let data = target.value;

  if (data.length == 0) {
    setMonthYearExpiryError(target, "Can't be blank");
  }
}

function cardNameInput(element) {
  let cardName = document.querySelector(".card-name");

  // let cardNameValue = element.value
  cardName.innerText = element.value;

  if (cardName.innerText.length == 0) {
    cardName.innerText = "Test Name";
    setError(element, "Can't be blank");
  } else {
    removeError(element);
  }
}

function cardNumberInput(element) {
  let cardNumbervalue = document.querySelector(".card-num");

  let numbers = /^[0-9]+$/;
  let cardNum = element.value;
  if (cardNum.length > 0) {
    cardNum = cardNum.slice(0, 16);
    cardNum = cardNum.match(/.{1,4}/g).join(" ");
  }

  if (!numbers.test(element.value)) {
    setError(element, "Wrong Format");
  } else {
    removeError(element);
  }
  cardNumbervalue.innerText = cardNum;
  if (cardNumbervalue.innerText.length == 0) {
    cardNumbervalue.innerText = "0000 0000 0000 0000";
    setError(element, "Can't be blank");
  }
}

function cardExpiryMonthInput(element) {
  let expiryDate = document.querySelector(".month");
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  expiryDate.innerText = elementData;

  if (expiryDate.innerText.length == 0) {
    expiryDate.innerText = "00";
  }
  if (element.value != "") {
    if (!(element.value >= 1 && element.value <= 12)) {
      setMonthYearExpiryError(element, "Wrong Format");
    } else {
      removeMonthYearError(element);
    }
  }
}

function cardExpiryYearInput(element) {
  removeMonthYearError(element)
  let expiryYear = document.querySelector(".year");
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  expiryYear.innerText = elementData;

  if (expiryYear.innerText.length == 0) {
    expiryYear.innerText = "00";
  }
}

function cvcInput(element) {
  let cvcNumber = document.querySelector(".cvc-number");
  let elementData = element.value.replace(/\D/g, "");
  element.value = elementData;
  cvcNumber.innerText = elementData;
  if (cvcNumber.innerText.length == 0) {
    cvcNumber.innerText = "000";
  } else {
    removeError(element);
  }
}

function checkCardNumberLength() {
  if (cardNumber.value.length < 16) {
    setError(cardNumber, "Should be at least 16 numbers");
  }
}

cardName.addEventListener("blur", (e) => EmptyFieldCheck(e.srcElement));
cardNumber.addEventListener("blur", (e) => EmptyFieldCheck(e.srcElement));
expiryMonth.addEventListener("blur", (e) =>
  month_year_EmptyFieldCheck(e.srcElement)
);
expiryYear.addEventListener("blur", (e) =>
  month_year_EmptyFieldCheck(e.srcElement)
);
cvc.addEventListener("blur", (e) => EmptyFieldCheck(e.srcElement));
