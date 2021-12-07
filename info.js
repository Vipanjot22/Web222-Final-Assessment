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

function validatefirstName() {
  var first_name = document.getElementById("firstname").value;
  var letters = /^[A-Za-z]+$/;
  if (first_name.match(letters) && first_name.charAt(0) == first_name.charAt(0).toUpperCase()) {
    document.getElementById("err").innerHTML = " ";
    return true;
  }
  else
    document.getElementById("err").innerHTML = "Please enter valid firstname";
  return false;
}

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

function validatepasswrd() {
  var psswrd = document.getElementById("password").value;
  let regex = /[a-zA-Z]+[0-9]+/i;
  if (psswrd.length >= 6 && psswrd.match(regex)) {
    document.getElementById("err2").innerHTML = " ";
    return true;
  }
  else
    document.getElementById("err2").innerHTML = "Please enter valid password";
  return false;
}
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