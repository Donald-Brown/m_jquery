"use strict";

let $ = function (id) {
  return document.getElementById(id);
};

function calculateFutureValue(investment, interestRate, years) {
  let futureValue = investment;

  for (let i = 0; i < years; i++) {
    futureValue += futureValue * (interestRate / 100);
  }
  return futureValue.toFixed(2);
};

let processData = function () {
  let investment = parseFloat($("investment").value);
  let interest = parseFloat($("interest_rate").value);
  let years = parseFloat($("years").value);
  let investmentError = $('investment').nextElementSibling;
  let interestError = $('interest_rate').nextElementSibling;
  let yearsError = $('years').nextElementSibling;
  let isValid = true;

  //? validate investment
  if ($('investment').value === '') {
    investmentError.innerHTML = 'this field is required';
    isValid = false;
  } else if (isNaN(investment)) {
    investmentError.innerHTML = 'must be numeric';
    isValid = false;
  } else if (investment <= 0 || investment > 100000) {
    investmentError.innerHTML = 'must be > 0 and <= 100000';
    isValid = false;
  } else {
    investmentError.innerHTML = ''
  }

  //? validate interest
  if ($('interest_rate').value === '') {
    interestError.innerHTML = 'this field is required';
    isValid = false;
  } else if (isNaN(interest)) {
    interestError.innerHTML = 'must be numeric';
    isValid = false;
  } else if (interest <= 0 || interest > 15) {
    interestError.innerHTML = 'must be > 0 and <= 15';
    isValid = false;
  } else {
    interestError.innerHTML = ''
  }

  //? validate years
  if ($('years').value === '') {
    yearsError.innerHTML = 'this field is required';
    isValid = false;
  } else if (isNaN(years)) {
    yearsError.innerHTML = 'must be numeric';
    isValid = false;
  } else if (years <= 0 || years > 50) {
    yearsError.innerHTML = 'must be > 0 and <= 50';
    isValid = false;
  } else {
    yearsError.innerHTML = ''
  }

  if (isValid) {
    $('future_value').value = calculateFutureValue(investment, interest, years);
  } else {
    $('future_value').value = '';
  }
};

let clearData = function() {
  $('investment').value = '';
  $('interest_rate').value = '';
  $('years').value = '';
  $('future_value').value = '';
}

window.onload = function () {
  $("calculate").onclick = processData;
  $('clear_entries').onclick = clearData;
  $('investment').ondblclick = clearData;
  $("investment").focus();
};
