document.getElementById("login-btn").addEventListener("click", function () {
  // get the mobile number
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);
  // get the pin
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);
  // match mobile number and password
  if (contactNumber == "01645522657" && pin == "1234") {
    alert("Login success");
    window.location.assign("/home.html")
  } else {
    alert("Login failed");
    return;
  }
});
