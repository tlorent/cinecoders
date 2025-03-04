/**
 * Create an Answer element
 * @returns {Element}
 */

import { quizData } from '../data.js';

export const createAnswerElement = (answerText, answerIndex, correctIndex) => {
  const answerOptionEl = document.createElement('li');
  answerOptionEl.classList.add('answer-option');
  answerOptionEl.innerHTML = `${answerText}`;

  answerOptionEl.addEventListener('click', () => {
    console.log(answerIndex, correctIndex);
    checkSelectedAnswer(answerOptionEl, answerIndex, correctIndex);
  });

  return answerOptionEl;
};

const checkSelectedAnswer = (answerOptionEl, answerIndex, correctIndex) => {
  disableFurtherClicks();
  const isCorrectAnswerSelected = answerIndex === correctIndex;

  if (isCorrectAnswerSelected) {
    answerOptionEl.classList.add('correct-answer');
    quizData.currentScore++;
  } else {
    answerOptionEl.classList.add('incorrect-answer');
    const allAnswerOptions = document.querySelectorAll('.answer-option');
    allAnswerOptions[correctIndex].classList.add('correct-answer');
  }
};

const disableFurtherClicks = () => {
  const allAnswerOptions = document.querySelectorAll('.answer-option');
  allAnswerOptions.forEach((answer) => answer.classList.add('disabled'));
};
