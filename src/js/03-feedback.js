import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
let localStorageInput = {};

checkSave();
form.addEventListener('input', throttle(updateLocalStorage, 500));
form.addEventListener('submit', submitForm);

function updateLocalStorage(event) {
  event.preventDefault();
  const data = event.target.value;
  localStorageInput[event.target.name] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageInput));
}

function checkSave() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    const { email, message } = savedData;
    if (savedData.email) {
      form.email.value = email;
      localStorageInput = savedData;
    }
    if (savedData.message) {
      form.message.value = message;
      localStorageInput = savedData;
    }
  }
}
function submitForm(event) {
  event.preventDefault();
  if (localStorageInput.email && localStorageInput.message) {
    console.log(localStorageInput);
    event.currentTarget.reset();
    localStorage.clear();
    localStorageInput = {};
  } else {
    alert('you have to fill both inputs');
  }
}
