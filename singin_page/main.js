// error-email 

var emailInput = document.querySelector('.email');
var passwordInput = document.querySelector('.password');
var emailError = document.querySelector('.email-error');
var passwordError = document.querySelector('.password-error');
var rememberCheckbox = document.querySelector('.checkbox-pass');
var savedEmail = localStorage.getItem('savedEmail');
var savedPassword = localStorage.getItem('savedPassword');

emailInput.addEventListener('blur', function() {
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

// error-password
passwordInput.addEventListener('blur', function() {
    var password = passwordInput.value;
    var email = emailInput.value;

    if (password !== 'password') { // Thay 'password' bằng mật khẩu thực tế của bạn
      passwordError.classList.add('show');
    } else {
      passwordError.classList.remove('show');
    }
});

// eyes-js

document.querySelector('.eyes-off').addEventListener('click', function() {
    var passwordInput = document.querySelector('.password');
    passwordInput.type = 'text';
    document.querySelector('.eyes-off').style.display = 'none';
    document.querySelector('.eyes-on').style.display = 'block';
});
  
document.querySelector('.eyes-on').addEventListener('click', function() {
    var passwordInput = document.querySelector('.password');
    passwordInput.type = 'password';
    document.querySelector('.eyes-on').style.display = 'none';
    document.querySelector('.eyes-off').style.display = 'block';
});

// save-account
if (savedEmail && savedPassword) {
    emailInput.value = savedEmail;
    passwordInput.value = savedPassword;
    rememberCheckbox.checked = true;
}
rememberCheckbox.addEventListener('change', function() {
    if (rememberCheckbox.checked) {
        localStorage.setItem('savedEmail', emailInput.value);
        localStorage.setItem('savedPassword', passwordInput.value);
    } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
    }
});

// click-change-to-fogot-form 