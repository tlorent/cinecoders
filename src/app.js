import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { CHANGE_THEME_BUTTON_ID } from './constants.js';
import { changeTheme } from './themeChanger.js';


const createButtonElement = () => {
  const btn = document.createElement('button');
  btn.id = CHANGE_THEME_BUTTON_ID;
  btn.innerHTML = '☾';
  return btn;
}
const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  const btn = createButtonElement();
  document.body.children[0].insertAdjacentElement('afterend', btn);
  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.addEventListener('click', changeTheme);
  initWelcomePage();
};

window.addEventListener('load', loadApp);
