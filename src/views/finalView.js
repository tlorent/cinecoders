import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createFinalElement = (score, question) => {
  const element = document.createElement('div');
  let message = !window.remainingTime ? `Time's Up!` : '';

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${message}
    ${localStorage.getItem('userName')}. You scored ${score} out of ${question}!</h1>

    <button id="${RESTART_QUIZ_BUTTON_ID}">
     Restart Quiz
    </button>
  `;

  return element;
};
