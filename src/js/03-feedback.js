import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

fillForm();

// Відстежуємо подію input
function onInput() {
  const formFieldsValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formFieldsValues));
}

// Заповнюємо поля форми даними зі сховища
function fillForm() {
  const values = localStorage.getItem(STORAGE_KEY);

  if (!values) {
    return;
  }

  const { email, message } = JSON.parse(values);

  form.elements.email.value = email;
  form.elements.message.value = message;
}

// Відстежуємо сабміт форми
function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;

  const data = {
    email: email.value,
    message: message.value,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);

  return form.reset();
}
