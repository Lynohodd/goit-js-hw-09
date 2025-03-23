let formData = { email: '', message: '' };
const feedbackFormState = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleForm);
form.addEventListener('submit', handleSubmit);

function handleForm() {
  formData.message = form.elements.message.value;
  formData.email = form.elements.email.value;

  localStorage.setItem(feedbackFormState, JSON.stringify(formData));
}

const savedDataStorage =
  JSON.parse(localStorage.getItem(feedbackFormState)) ?? {};

if (Object.keys(savedDataStorage).length > 0) {
  formData.email = savedDataStorage.email;
  formData.message = savedDataStorage.message;
  form.elements.message.value = savedDataStorage.message;
  form.elements.email.value = savedDataStorage.email;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!(form.elements.email.value && form.elements.message.value)) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(feedbackFormState);
  formData.email = '';
  formData.message = '';
  form.elements.message.value = '';
  form.elements.email.value = '';
}
