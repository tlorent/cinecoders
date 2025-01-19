import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
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

  const answers = Object.values(currentQuestion.answers);
  const correctAnswerText = answers[currentQuestion.correctAnswerIndex];
  const randomizedAnswers = randomizeQuestionOptions(answers);
  const newCorrectIndex = randomizedAnswers.indexOf(correctAnswerText);
  currentQuestion.correctAnswerIndex = newCorrectIndex;

  randomizedAnswers.forEach((randomizedAnswerText, index) => {
    const randomizedAnswerElement = createAnswerElement(
      randomizedAnswerText,
      index,
      currentQuestion.correctAnswerIndex
    );
    answersListElement.appendChild(randomizedAnswerElement);
    answersListElement.classList.add('animateWithFadeAndSlide');
  });

  if (quizFinished()) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', toFinalPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }
};
export const quizFinished = () =>
  quizData.currentQuestionIndex === quizData.questions.length - 1;

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};

export const toFinalPage = () => {
  initFinalPage(quizData.currentScore, quizData.questions.length);
};

/* The sort() method reorders the elements in the array.
  The comparator Math.random() - 0.5 generates a random number between -0.5 and 0.5:
  If the result is negative, the first element is sorted before the second.
  If positive, the first element is sorted after the second.
  If zero, the order remains unchanged. 
  */
export const randomizeQuestionOptions = (answerTexts) => {
  return answerTexts.sort(() => Math.random() - 0.5);
};
