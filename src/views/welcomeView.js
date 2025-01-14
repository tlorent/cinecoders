import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <label for="username">Please enter your name:</label>
    <input type="text" id="username" placeholder="Your Name" />
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
