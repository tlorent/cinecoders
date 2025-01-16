import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CHANGE_THEME_BUTTON_ID,
} from '../constants.js';
import { changeTheme } from '../themeChanger.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createTimerElement } from '../views/timerView.js';
import { quizData } from '../data.js';
import { initFinalPage } from './finalPage.js';
import { timerInterval } from './timerPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = `<button id="${CHANGE_THEME_BUTTON_ID}">☾</button>`;

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const timerElement = createTimerElement();
  userInterface.appendChild(timerElement);

  const questionElement = createQuestionElement(currentQuestion.text);
  questionElement.classList.add('animateWithFadeAndSlide');
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  Object.values(currentQuestion.answers).forEach((answerText, index) => {
    const answerElement = createAnswerElement(
      answerText,
      index,
      currentQuestion.correctAnswerIndex
    );
    answersListElement.appendChild(answerElement);
    answersListElement.classList.add('animateWithFadeAndSlide');
  });

  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.addEventListener('click', changeTheme);

  const checkForQuizFinish = () => {
    const timeIsUp = window.remainingTime === 0;
    const isLastQuestion =
      quizData.currentQuestionIndex === quizData.questions.length - 1;

    if (timeIsUp || isLastQuestion) {
      clearInterval(window.timerInterval);
      toFinalPage();
      return true;
    }
    return false;
  };

  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextButton.addEventListener('click', () => {
    if (!checkForQuizFinish()) {
      quizData.currentQuestionIndex++;
      initQuestionPage();
    }
  });
};

export const toFinalPage = () => {
  const score = initFinalPage(quizData.currentScore, quizData.questions.length);
  document.getElementById(USER_INTERFACE_ID).appendChild(score);
};
