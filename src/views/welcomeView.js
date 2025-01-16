import {
  START_QUIZ_BUTTON_ID,
  PARAGRAPH_ID,
  GREET_DIV_ID,
  INPUT_FIELD_ID,INPUT_FIELD_CLASS,
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
      <p id="${PARAGRAPH_ID}">You've <span class="minutes">5</span> minutes to test your movie skills!</p>
      <div class="welcome">
    <form id="welcome-from">

      <input type="text" id="${INPUT_FIELD_ID}" class="${INPUT_FIELD_CLASS}" placeholder="Enter Your Name"  required/>
      <button type="submit" id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
    </form>
    </div>
  `;
  return greetingElement;
};
