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

  //? validate input
  if (isNaN(investment) || investment < 0 || investment >= 100000) {
    (isNaN(investment)) ? alert('investment must be a number') : (investment < 0) ? alert('investment must be equal to or greater than 0') : alert('investment must be less than 100000');
  } else if (isNaN(interest) || interest < 0 || interest >= 15) {
    alert("interest rate must be a number greater than or equal to 0 and less than 15");
  } else if (isNaN(years) || years < 0 || years >= 50) {
    alert("years must be a number less than or equal to zero and less than fifty");
  } else {
    $("future_value").value = calculateFutureValue(investment, interest, years);
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
