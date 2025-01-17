import { CHANGE_THEME_BUTTON_ID } from './constants.js';

export const changeTheme = () => {
  document.body.classList.toggle('dark-mode');
  saveCurrentTheme();
  updateThemeIcon();
};

export const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  updateThemeIcon();
};

const saveCurrentTheme = () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

const updateThemeIcon = () => {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const changeThemeButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  changeThemeButton.textContent = isDarkMode ? '☾' : '☼';
};
