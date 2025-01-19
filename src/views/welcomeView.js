import {
  START_QUIZ_BUTTON_ID,
  PARAGRAPH_ID,
  WELCOME_DIV_ID,
  INPUT_FIELD_ID,
  WELCOME_FORM,
} from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const greetingElement = document.createElement('div');
  greetingElement.id = WELCOME_DIV_ID;
  greetingElement.innerHTML = String.raw`
      <h1>Welcome to Our Movie Quiz</h1>
      <p id="${PARAGRAPH_ID}">You've <span class="highlight">2</span> minutes to test your movie skills!</p>
   
    <form id="${WELCOME_FORM}">

      <input type="text" id="${INPUT_FIELD_ID}"  placeholder="Enter Your Name"  required/>
      <button type="submit" id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
    </form>
   
  `;
  return greetingElement;
};
