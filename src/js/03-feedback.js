'use strict';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const emailAreaEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

// ============================Мой способ====================================================

function storeData(event) {
  const feedbackFormState = {
    email: emailAreaEl.value,
    message: textAreaEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

feedbackFormEl.addEventListener('input', throttle(storeData, 500, { leading: false }));

const CheckFormValues = () => {
  if (emailAreaEl.value === '' || textAreaEl.value === '') {
    return;
  }
};

CheckFormValues();

emailAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
textAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
});

// =========================Способ как на занятии======================================================

// const feedbackFormState = {};

// feedbackFormEl.addEventListener('input', event => {
//   const target = event.target;

//   feedbackFormState[target.name] = target.value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
// });

// feedbackFormEl.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   feedbackFormEl.reset();
//   localStorage.removeItem('feedback-form-state');
// });

// const fillFormFields = () => {
//   const localStorageFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (localStorageFormData === null) {
//     return;
//   }

//   const keys = Object.keys(localStorageFormData);

//   for (const key of keys) {
//     feedbackFormEl.elements[key].value = localStorageFormData[key];
//   }
// };

// fillFormFields();
