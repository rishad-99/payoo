document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");

  if (bankAccount == "Select bank") {
    alert("Please select a bank");
  }

  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from ${bankAccount}`);
    setValue(newBalance);
  } else {
    alert("Invalid pin");
    return;
  }
});
