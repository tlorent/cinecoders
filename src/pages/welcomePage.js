import {
  USER_INTERFACE_ID,
  TIME_LEFT_IN_SEC,
  INPUT_FIELD_ID,
  WELCOME_FORM,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { initTimer } from '../utilities/timerPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.classList.add('loaded');
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const welcomeForm = document.getElementById(WELCOME_FORM);

  welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById(INPUT_FIELD_ID).value.trim();
    localStorage.setItem('userName', userName);
    initQuestionPage();
    setTimeout(() => {
      initTimer();
    }, 100);
  });
};

export const startQuiz = () => {
  const timerElement = document.querySelector('.timer');
  if (timerElement) timerElement.remove();

  window.remainingTime = TIME_LEFT_IN_SEC;
  initQuestionPage();
  setTimeout(() => {
    initTimer();
  }, 100);
};
