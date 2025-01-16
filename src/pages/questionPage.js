import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalPage } from './finalPage.js';
import { remainingTime } from './welcomePage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
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

  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', () => {
        clearInterval(window.timerInterval);
        toFinalPage();
      });
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', () => {
        if (window.remainingTime === 0) {
          clearInterval(window.timerInterval);
          toFinalPage();
        } else {
          nextQuestion();
        }
      });
  }

  const timerCheckInterval = setInterval(() => {
    if (window.remainingTime === 0) {
      clearInterval(window.timerInterval);
      clearInterval(timerCheckInterval);
      toFinalPage();
    }
  }, 500);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};

export const toFinalPage = () => {
  initFinalPage(quizData.currentScore, quizData.questions.length);
};
