function validateForm() {
  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var city = document.getElementById("city").value;

  if (name === "") {
    alert("Please enter Full Name");
    return false;
  }

  if (email === "") {
    alert("Please enter Email");
    return false;
  }

  if (mobile === "") {
    alert("Please enter Mobile Number");
    return false;
  } else if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Please enter a valid mobile number of 10 digits");
    return false;
  }

  if (city === "Select City") {
    alert("Please select city from the list");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}