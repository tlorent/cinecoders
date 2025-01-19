import {
  WELCOME_DIV_ID,
  RESTART_QUIZ_BUTTON_ID,
  FINAL_MSG_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createFinalElement = (score, question) => {
  const element = document.createElement('div');
  element.id = WELCOME_DIV_ID;
  let message = !window.remainingTime ? `Time's Up!` : '';

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1 id="${FINAL_MSG_ID}">${message} <span class="highlight">
    ${localStorage.getItem(
      'userName'
    )}</span>, You scored ${score} out of ${question}!</h1>
    <div id="result-container"></div>
    <button id="${RESTART_QUIZ_BUTTON_ID}">
     Restart Quiz
    </button>
  `;

  return element;
};
