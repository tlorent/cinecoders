import {
  USER_INTERFACE_ID,
  RESTART_QUIZ_BUTTON_ID,
  TIME_LEFT_IN_SEC,
  CHANGE_THEME_BUTTON_ID,
} from '../constants.js';
import { changeTheme } from '../themeChanger.js';
import { createFinalElement } from '../views/finalView.js';
import { initQuestionPage } from './questionPage.js';
import { quizData } from '../data.js';
import { startQuiz } from './welcomePage.js';

export const initFinalPage = (score, question) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = `<button id="${CHANGE_THEME_BUTTON_ID}">☾</button>`;

  const finalElement = createFinalElement(score, question);
  userInterface.appendChild(finalElement);
  finalElement.classList.add('animateWithFadeAndSlide');

  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.addEventListener('click', changeTheme);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;
  // the questions in the quiz
  quizData.currentScore = 0;
  //initQuestionPage();
  startQuiz();
};
