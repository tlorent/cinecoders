import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { loadSavedTheme } from './themeChanger.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
  loadSavedTheme();
};

window.addEventListener('load', loadApp);
