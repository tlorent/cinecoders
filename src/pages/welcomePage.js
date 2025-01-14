import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  uTIME_LEFT_IN_SEC,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const startBtn = document.getElementById(START_QUIZ_BUTTON_ID);

  startBtn.addEventListener('click', startQuiz);

  startBtn.addEventListener('click', () => {
    localStorage.setItem('remainingTime', TIME_LEFT_IN_SEC);
  });
};

const startQuiz = () => {
  initQuestionPage();
};
