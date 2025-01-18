import { CHANGE_THEME_BUTTON_ID, WRAPPER_CLASS } from './constants.js';

const isDarkMode = () => document.body.classList.contains('dark-mode');

const changeTheme = () => {
  document.body.classList.toggle('dark-mode');
  saveCurrentTheme();
  updateThemeIcon();
};

const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  updateThemeIcon();
};

const saveCurrentTheme = () => {
  localStorage.setItem('theme', isDarkMode() ? 'dark' : 'light');
};

const updateThemeIcon = () => {
  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  const [moonIcon, sunIcon] = changeThemeButton.querySelectorAll('i');
  moonIcon.style.display = isDarkMode() ? 'none' : '';
  sunIcon.style.display = isDarkMode() ? '' : 'none';
};

const createChangeThemeButton = () => {
  const wrapper = document.querySelector(WRAPPER_CLASS);
  const changeThemeButton = document.createElement('button');
  changeThemeButton.id = CHANGE_THEME_BUTTON_ID;
  changeThemeButton.innerHTML = `
    <i class="fa-solid fa-moon icon-moon"></i>
    <i class="fa-solid fa-sun icon-sun"></i>
  `;
  wrapper.prepend(changeThemeButton);
  return changeThemeButton;
};

export const initThemeChanger = () => {
  const changeThemeButton = createChangeThemeButton();
  changeThemeButton.addEventListener('click', changeTheme);
  loadSavedTheme();
};