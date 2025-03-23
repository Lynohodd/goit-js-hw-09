let formData = { email: '', message: '' };
const feedbackFormState = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email-input');
const textarea = document.querySelector('.textarea');

form.addEventListener('input', handleForm);

function handleForm() {
  formData.message = form.elements.message.value;
  formData.email = form.elements.email.value;

  localStorage.setItem(feedbackFormState, JSON.stringify(formData));
}

const savedDataStorage =
  JSON.parse(localStorage.getItem(feedbackFormState)) ?? {};
// Почему обьект, а не массив?

if (Object.keys(savedDataStorage).length > 0) {
  formData.email = savedDataStorage.email;
  formData.message = savedDataStorage.message;
  form.elements.message.value = savedDataStorage.message;
  form.elements.email.value = savedDataStorage.email;
}

form.addEventListener('submit', handleSubmit);

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

// const instance =
//   basicLightbox.create(`<form class="feedback-form" autocomplete="off">
//         <label class="label email-label">
//           Email
//           <input
//             class="text-in email-input"
//             type="email"
//             name="email"
//             autofocus
//           />
//         </label>
//         <label class="label message-label">
//           Message
//           <textarea class="text-in textarea" name="message" rows="8"></textarea>
//         </label>
//         <button class="button" type="submit">Submit</button>
//       </form>`);

// instance.show();
