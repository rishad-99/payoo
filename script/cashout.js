document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid number");
    return;
  }

  const cashoutAmount = getValueFromInput("cashout-amount");

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);

  const newBalance = Number(balance) - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Input");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin == "1234") {
    alert("Cashout Success");
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length != 11) {
//     alert("Invalid number");
//     return;
//   }

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Input");
//     return;
//   }
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   if (cashoutPin == "1234") {
//     alert("Cashout success");
//     balanceElement.innerText = newBalance;
//     console.log("new balance is", newBalance);
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
// });
