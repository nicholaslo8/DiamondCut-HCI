const username = document.querySelector('#Username');
const password = document.querySelector('#Password');
const phoneNumber = document.querySelector('#number');
const email = document.querySelector('#Email');
const confirmPassword = document.querySelector('#PasswordConfirm');
const login = document.querySelector('#login');
const message = document.querySelector('.form-error');

login.addEventListener('click', e => {
  e.preventDefault();
  if (
    username.value === '' ||
    password.value === '' ||
    phoneNumber.value === '' ||
    email.value === '' ||
    confirmPassword.value === ''
  ) {
    message.style.display = 'block';
    message.innerHTML = 'Please fill in all fields';
  } else if (email.value.includes('@') === false) {
    message.style.display = 'block';
    message.innerHTML = 'Invalid email';
  } else if (phoneNumber.value.length < 10) {
    message.style.display = 'block';
    message.innerHTML = 'Invalid phone number';
  } else if (password.value.length < 8) {
    message.style.display = 'block';
    message.innerHTML = 'Password must be at least 8 characters';
  } else if (password.value !== confirmPassword.value) {
    message.style.display = 'block';
    message.innerHTML = 'Password does not match';
  } else {
    message.style.display = 'none';
    window.location.href = '/';
  }
});
