import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  TIMER_CONTAINER,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalPage } from './finalPage.js';
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
      .addEventListener('click', toFinalPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const toFinalPage = () => {
  const score = initFinalPage(quizData.currentScore, quizData.questions.length);
  document.getElementById(USER_INTERFACE_ID).appendChild(score);
};
