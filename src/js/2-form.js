const formRef = document.querySelector('.feedback-form');

const formData = { email: '', message: '' };

const localStorageFormDataKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageFormDataKey);
if (savedData) {
  const parsed = JSON.parse(savedData);
  formData.email = parsed.email;
  formData.message = parsed.message;
  formRef.elements.email.value = parsed.email;
  formRef.elements.message.value = parsed.message;
}

formRef.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(localStorageFormDataKey, JSON.stringify(formData));
  }
});

formRef.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageFormDataKey);
  formData.email = '';
  formData.message = '';
  formRef.reset();
});
