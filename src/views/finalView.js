import {
  RESTART_QUIZ_BUTTON_ID,
  CHANGE_THEME_BUTTON_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createFinalElement = (score, question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>You scored ${score} out of ${question}!</h1>

    <button id="${RESTART_QUIZ_BUTTON_ID}">
     restart quiz
    </button>
  `;

  return element;
};
