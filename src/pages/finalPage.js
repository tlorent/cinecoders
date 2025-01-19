import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { createFinalElement } from '../views/finalView.js';

import { quizData, originalQuizData, deepCopy } from '../data.js';
import { startQuiz } from './welcomePage.js';

export const initFinalPage = (score, question) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalElement = createFinalElement(score, question);
  userInterface.appendChild(finalElement);

  showGif(score);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const showGif = (score) => {
  let gifUrl = '';

  if (score > 7) {
    gifUrl = './public/gifs/gif1.gif';
  } else if (score >= 4) {
    gifUrl = './public/gifs/gif2.gif';
  } else {
    gifUrl = './public/gifs/gif3.gif';
  }

  const gifElement = document.createElement('img');
  gifElement.src = gifUrl;
  gifElement.alt = 'Quiz result gif';
  gifElement.classList.add('result-gif');

  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';
  resultContainer.appendChild(gifElement);
};

const restartQuiz = () => {
  Object.assign(quizData, deepCopy(originalQuizData));
  quizData.currentQuestionIndex = 0;
  quizData.currentScore = 0;
  startQuiz();
};
