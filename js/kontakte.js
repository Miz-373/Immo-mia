var loginForm = document.querySelector('form.register');
var allInputs = document.querySelectorAll('form.register input');


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
        var regExpEmail = /.+@.+\..+/;
        if (allInputs[i].value.match(regExpEmail) == null) {
          isValid = false;
          allInputs[i].classList.add('is-invalid');
          allInputs[i].nextElementSibling.classList.add('is-invalid');
          allInputs[i].nextElementSibling.innerHTML = '*Wrong Email Format*';
      }
    }
  }

  return isValid;
}

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  if (validate() == true) {
    alert('Vielen Dank... Ihre Nachricht ist bei uns angekommen');
    //loginForm.submit();
  } else {
    alert('please change inputs');
  }

});
