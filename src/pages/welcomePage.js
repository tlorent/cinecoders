import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  TIME_LEFT_IN_SEC,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { initTimer } from './timerPage.js';
window.remainingTime = TIME_LEFT_IN_SEC;
export let remainingTime;
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const startBtn = document.getElementById(START_QUIZ_BUTTON_ID);

  startBtn.addEventListener('click', startQuiz);
};

export const startQuiz = () => {
  initQuestionPage();
  window.remainingTime = TIME_LEFT_IN_SEC;

  setTimeout(() => {
    initTimer();
  }, 100);
};
