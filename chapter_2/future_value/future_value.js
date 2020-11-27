"use strict";

let $ = function (id) {
  return document.getElementById(id);
};

let calculateFutureValue = function (investment, interestRate, years) {
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
  if (isNaN(investment)) {
    alert("investment must be a number");
  } else if (isNaN(interest)) {
    alert("interest rate must be a number");
  } else if (isNaN(years)) {
    alert("years must be a number");
  } else {
    $("future_value").value = calculateFutureValue(investment, interest, years);
  }
};

window.onload = function () {
  $("calculate").onclick = processData;
  $("investment").focus();
};
