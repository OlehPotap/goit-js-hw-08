'use strict';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const emailAreaEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

// ============================Мой способ 1 не рабочий====================================================

// function doTheThinOnPage() {

//   if (emailAreaEl.value === "" || textAreaEl.value === "") {
//     return;
//   };

//   emailAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
//   textAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;

//   function storeData(event) {
//     const feedbackFormState = {
//       email: emailAreaEl.value,
//       message: textAreaEl.value,
//     };

//     localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
//   }

//   feedbackFormEl.addEventListener('input', throttle(storeData, 500, { leading: false }));

//   feedbackFormEl.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//     feedbackFormEl.reset();
//     localStorage.removeItem('feedback-form-state');
//   });
// }
// doTheThinOnPage();

// ========================Мой способ 2 рабочий===============================================

const feedbackFormState = {};

// Выводим данные из стореджа если они есть

function fillForm() {
  const localStorageFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorageFormData === null) {
    return;
  }

  emailAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  textAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

fillForm();
// Сохраняем введенные в инпут данные в локальное хранилище

function storeData(event) {
  feedbackFormState.email = emailAreaEl.value;
  feedbackFormState.message = textAreaEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

feedbackFormEl.addEventListener('input', throttle(storeData, 500, { leading: false }));

// Выполняем действие по слбытию нажатия кнопки

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
