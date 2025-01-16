import {
  START_QUIZ_BUTTON_ID,
  PARAGRAPH_ID,
  GREET_DIV_ID,
  INPUT_FIELD_ID,
} from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createLineElement = () => {
  const lineElement = document.createElement('div');
  lineElement.classList.add('line');
  return lineElement;
};

export const createWelcomeElement = () => {
  const greetingElement = document.createElement('div');
  greetingElement.id = GREET_DIV_ID;
  greetingElement.innerHTML = String.raw`
      <h1>Welcome to Our Movie Quiz</h1>
      <p id="${PARAGRAPH_ID}">You've 5 minutes to test your movie skills!</p>
    <form id="welcome-from">
      <label for="username">Please enter your name:</label>
      <input type="text" id="${INPUT_FIELD_ID}" placeholder="Your Name"  required/>
      <button type="submit" id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
    </form>
  `;
  return greetingElement;
};
