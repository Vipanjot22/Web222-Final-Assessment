function validationForm() {
  validatepasswrd();
  validateuserName();
  validatefirstName();
  validatelastName();
  validateConfirmPass();
  validateAge();

  if (validatepasswrd() && validateuserName() && validatefirstName() && validatelastName() && validateConfirmPass()
    && validateAge()) {
    alert("Form is submitted successfully");
    return true;
  }
  else {
    return false
  }
}
// This function validates that the firstname should start with capital letter and only alphabets are allowed.
function validatefirstName() {
  var first_name = document.getElementById("firstname").value;
  var alphabets = /^[A-Za-z]+$/;
  if (first_name.match(alphabets) && first_name.charAt(0) == first_name.charAt(0).toUpperCase()) {
    document.getElementById("err").innerHTML = " ";
    return true;
  }
  else
    document.getElementById("err").innerHTML = "Please enter valid firstname";
  return false;
}

// This function validates that the laststname should start with capital letter and only alphabets are allowed.
function validatelastName() {
  var last_name = document.getElementById("lastname").value;
  var letters = /^[A-Za-z]+$/;
  if (last_name.match(letters) && last_name.charAt(0) == last_name.charAt(0).toUpperCase()) {
    document.getElementById("err1").innerHTML = " ";
    return true;
  }
  else
    document.getElementById("err1").innerHTML = "Please enter valid lastname";
  return false;
}

//This function validates that the password must be at least 6 characters long, must start with an alphabet,
// must have at least 1 digit and 1 uppercase. The password strings must match.
function validatepasswrd() {
  var psswrd = document.getElementById("password").value;
  let regexp = /[a-zA-Z]+[0-9]+/i;
  if (psswrd.length >= 6 && psswrd.match(regexp)) {
    document.getElementById("err2").innerHTML = " ";
    return true;
  }
  else
    document.getElementById("err2").innerHTML = "Please enter valid password";
  return false;
}

//This Function validates that confirm password field must match with the already filled password.
function validateConfirmPass() {
  var psswrd = document.getElementById("password").value;
  var psswrd2 = document.getElementById("PasswordConfirmation").value;
  if (psswrd == psswrd2) {
    document.getElementById("err3").innerHTML = " ";
    return true;
  }
  else {
    document.getElementById("err3").innerHTML = "Password should match";
    return false;
  }
}

//This function validates that the username must start with an alphabet, must have at least 6 characters.
function validateuserName() {
  var usrname = document.getElementById("username").value;
  if (usrname.length >= 6 && usrname.charAt(0).match('[A-Za-z]')) {
    document.getElementById("err4").innerHTML = " ";
    return true;
  }
  else {
    document.getElementById("err4").innerHTML = "Please enter valid username";
    return false;
  }
}

//This function validates that the age should be between 18 and 60.
function validateAge() {
  var age = document.getElementById('age').value;
  if (age < 18 || age > 60) {
    document.getElementById("err5").innerHTML = "Age must be between 18-60";
    return false;
  }
  else {
    document.getElementById("err5").innerHTML = " ";
    return true;
  }
}
