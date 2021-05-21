const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

//Start of Validation ----------------------------------------------

var loginForm = document.querySelector('form.register');
var allInputs = document.querySelectorAll('form.register input');
var loginForm_in = document.querySelector('form.register-in');
var allInputs_in = document.querySelectorAll('form.register-in input');

//-----------------------------------------------------------------
//Anmelden Validation ----------------

function validate() {

  isValid = true;

  for (var i = 0; i < allInputs.length; i++) {

    allInputs[i].classList.remove('is-invalid');
    allInputs[i].nextElementSibling.classList.remove('is-invalid');

    switch (allInputs[i].name) {
      case 'firstname':
      case 'lastname':
        if (allInputs[i].value == '') {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
        }
        break;
      case 'email':
        var regExpEmail = /.+@.+\..+/; // 
        if (allInputs[i].value.match(regExpEmail) == null) {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Wrong Email Format';
        }
        break;
      case 'password':
      case 'password2':
        if (allInputs[i].value.length < 8) {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = 'Too short';
        } else {
          var passwordValue = document.querySelector('#password').value;
          var password2Value = document.querySelector('#password2').value;
          if (passwordValue != password2Value) {
            isValid = false;
            allInputs[i].classList.add('is-invalid');
            allInputs[i].nextElementSibling.classList.add('is-invalid');
            allInputs[i].nextElementSibling.innerHTML = 'Password and Confirmation do not match';
          }

        }

    }

  }
  return isValid;

}

//--------------------------------
//Einloggen Validation ----------------
function validate_2() {

  isValid_2 = true;

  for (var i = 0; i < allInputs_in.length; i++) {

    allInputs_in[i].classList.remove('is-invalid_in');
    allInputs_in[i].nextElementSibling.classList.remove('is-invalid_in');

    switch (allInputs_in[i].name) {
      case 'email-in':
        var regExpEmail_in = /.+@.+\..+/; // 
        if (allInputs_in[i].value.match(regExpEmail_in) == null) {
          isValid_2 = false;
          allInputs_in[i].classList.add('is-invalid_in');
          allInputs_in[i].nextElementSibling.classList.add('is-invalid_in');
          allInputs_in[i].nextElementSibling.innerHTML = 'Wrong Email Format';
        }
        break;
      case 'password-in':
        if (allInputs_in[i].value.length < 8) {
          isValid_2 = false;
          allInputs_in[i].classList.add('is-invalid_in');
          allInputs_in[i].nextElementSibling.classList.add('is-invalid_in');
          allInputs_in[i].nextElementSibling.innerHTML = 'Too short';
        }

    }

  }
}
  //--------------------------------------------------

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if (validate() == true) {
    console.log('submit');
    //Anmelden.Form.submit();
  } else {
    console.log('please change inputs');
  }

});



loginForm_in.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if (validate_2() == true) {
    console.log('submit');
    //Einloggen.Form.submit();
  } else {
    console.log('please change inputs');
  }

});

//End of Validation ----------------------------------------------