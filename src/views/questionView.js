import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  const questionNum = createSpanElement();
  questionNum.textContent = `${quizData.currentQuestionIndex + 1}/ ${
    quizData.questions.length
  }`;

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <span class="question-indicator"> Question ${
    quizData.currentQuestionIndex + 1
  } </span> 
    <h1 class="question-heading"> ${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next Question
    </button>
  `;

  return element;
};

export const createSpanElement = () => {
  const spanElement = document.createElement('span');
  spanElement.classList.add('page');

  return spanElement;
};
