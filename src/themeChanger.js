import { CHANGE_THEME_BUTTON_ID } from './constants.js';
export const createButtonElement = () => {
  const btn = document.createElement('button');
  btn.id = CHANGE_THEME_BUTTON_ID;
  btn.innerHTML =
    '<i class="fa-solid fa-moon"></i><i class="fa-solid fa-sun" style="display:none"></i>';

  return btn;
};

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
  changeThemeButton.innerHTML = isDarkMode
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
};

export const toggleBackground = () => {
  const body = document.body;
  const toggleButton = document.getElementById(CHANGE_THEME_BUTTON_ID);
  const sunIcon = toggleButton.querySelector('.fa-sun');
  const moonIcon = toggleButton.querySelector('.fa-moon');

  body.classList.add('with-bg');
  sunIcon.style.display = 'inline';
  moonIcon.style.display = 'none';

  toggleButton.addEventListener('click', function () {
    body.classList.toggle('with-bg');

    if (body.classList.contains('with-bg')) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    } else {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    }
  });
};
