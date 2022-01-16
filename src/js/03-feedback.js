'use strict';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const emailAreaEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

function showEvent(event) {
  let feedbackFormState = {
    email: emailAreaEl.value,
    password: textAreaEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

feedbackFormEl.addEventListener('input', throttle(showEvent, 500, { leading: false }));

emailAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
textAreaEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).password;

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
});
