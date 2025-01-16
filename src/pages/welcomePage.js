import {
  USER_INTERFACE_ID,
  TIME_LEFT_IN_SEC,
  CHANGE_THEME_BUTTON_ID,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { changeTheme } from '../themeChanger.js';
import { initTimer } from './timerPage.js';
window.remainingTime = TIME_LEFT_IN_SEC;
export let remainingTime;
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = `<button id="${CHANGE_THEME_BUTTON_ID}">☾</button>`;
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  const welcomeForm = document.getElementById('welcomeForm');
  const errorMessage = document.getElementById('errorMessage');
  welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username').value.trim();
    if (userName !== '') {
      localStorage.setItem('userName', userName);
      showGreetingPage(userName);
    } else {
      errorMessage.style.display = 'block';
    }
  });
  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.addEventListener('click', changeTheme);
};

const showGreetingPage = (userName) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = `<button id="${CHANGE_THEME_BUTTON_ID}">☾</button>`;
  const greetingPage = document.createElement('div');
  greetingPage.innerHTML = String.raw`
    <h1>Hello, ${userName}!</h1>
    <p>Would you like to take the quiz?</p>
    <button id="startQuizButton">Start Quiz</button>
  `;
  userInterface.appendChild(greetingPage);
  greetingPage.classList.add('animateWithFadeAndSlide');
  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.addEventListener('click', changeTheme);
  const startQuizButton = document.getElementById('startQuizButton');
  startQuizButton.addEventListener('click', startQuiz);
};

export const startQuiz = () => {
  initQuestionPage();
  window.remainingTime = TIME_LEFT_IN_SEC;
  setTimeout(() => {
    initTimer();
  }, 100);
};
