import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, GRID_CONTAINER_ID } from '../constants.js';
import { quizData } from '../data.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.id = GRID_CONTAINER_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
 
    <div class="heading-container">
   
    <span class="question-indicator"> Question ${
      quizData.currentQuestionIndex + 1
    } </span> 
  <h1 class="question-heading"> ${question}</h1></div>
 
    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next Question
    </button>
  `;

  return element;
};
