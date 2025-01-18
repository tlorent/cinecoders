import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initThemeChanger } from './themeChanger.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initThemeChanger();
  initWelcomePage();
};

window.addEventListener('load', loadApp);
