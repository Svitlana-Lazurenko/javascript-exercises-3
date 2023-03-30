import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

populateForm();

function populateForm() {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseData = JSON.parse(data);

  if (parseData) {
    if (parseData['email']) {
      formEl.elements.email.value = parseData['email'];
    }

    if (parseData['message']) {
      formEl.elements.message.value = parseData['message'];
    }
  }
}

function onFormInput() {
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
}

// ----------Second variant of Form Submit (less reliable)-------------

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(localStorage.getItem(LOCALSTORAGE_KEY));
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   e.currentTarget.reset();
// }
