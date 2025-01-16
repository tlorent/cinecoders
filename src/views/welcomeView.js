import { SUBMIT_BUTTON, CHANGE_THEME_BUTTON_ID } from '../constants.js';
/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome to the Quiz</h1>
    <form id="welcomeForm">
      <label for="username">Please enter your name:</label>
      <input type="text" id="username" placeholder="Your Name" required />
      <button type="submit" id="${SUBMIT_BUTTON}">Submit</button>
    </form>
    <div id="greetingSection" style="display: none;">
      <p id="greetingMessage"></p>
      <button id="startQuizButton" style="display: none;">Start Quiz</button>
    </div>
  `;
  return element;
};
