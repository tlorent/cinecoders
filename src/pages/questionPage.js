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

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  answersListElement.addEventListener('click', function (e) {
    const selectedBtn = e.target;
    const answerFromUser = selectedBtn.textContent.split(':')[0].trim();
    console.log(answerFromUser);
    const correctAnswer =
      quizData.questions[quizData.currentQuestionIndex].correct;
    console.log(correctAnswer);
    const isCorrect = answerFromUser === correctAnswer;
    if (isCorrect) {
      selectedBtn.classList.add('correct');
      quizData.currentScore++;
    } else {
      selectedBtn.classList.add('incorrect');
    }
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
