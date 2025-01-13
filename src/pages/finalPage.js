
import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { createFinalElement } from '../views/finalView.js';
import { initQuestionPage } from './questionPage.js';
import { quizData } from '../data.js';

export const initFinalPage = (score,question) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalElement = createFinalElement(score ,question);
  userInterface.appendChild(finalElement);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0
  // the questions in the quiz
  quizData.currentScore = 0
  initQuestionPage();
};
