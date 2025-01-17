import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

import { toggleBackground, createButtonElement } from './themeChanger.js';

const loadApp = () => {
  const wrapper = document.querySelector('.wrapper');
  const toggleButton = createButtonElement();
  const firstChild = wrapper.firstChild;
  if (firstChild) {
    wrapper.insertBefore(toggleButton, firstChild);
  } else {
    wrapper.appendChild(toggleButton);
  }
  quizData.currentQuestionIndex = 0;

  toggleButton.addEventListener('click', toggleBackground);
  initWelcomePage();
};

window.addEventListener('load', loadApp);
