import { initWelcomePage } from './pages/welcomePage.js';
import { initThemeChanger } from './themeChanger.js';

const loadApp = () => {
  initThemeChanger();
  initWelcomePage();
};

window.addEventListener('load', loadApp);
