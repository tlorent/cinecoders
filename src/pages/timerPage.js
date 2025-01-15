import { toFinalPage } from './questionPage.js';
import { TIMER_CONTAINER, MINUTES, TIME_LEFT_IN_SEC } from '../constants.js';
import { createTimerElement } from '../views/timerView.js';

export let timerInterval;
export const initTimer = () => {
  if (window.timerInterval) {
    clearInterval(window.timerInterval);
  }

  const timerElement = createTimerElement();
  const timerContainer = document.getElementById(TIMER_CONTAINER);
  timerContainer.innerHTML = '';
  timerContainer.appendChild(timerElement);

  if (window.remainingTime === undefined) {
    window.remainingTime = TIME_LEFT_IN_SEC;
  }

  const updateTimerDisplay = (time) => {
    const minutes = String(Math.floor(time / MINUTES)).padStart(2, '0');
    const seconds = String(time % MINUTES).padStart(2, '0');
    timerElement.textContent = `Time left: ${minutes}:${seconds}`;
  };

  updateTimerDisplay(window.remainingTime);

  window.timerInterval = setInterval(() => {
    if (window.remainingTime > 0) {
      window.remainingTime--;
      updateTimerDisplay(window.remainingTime);
    } else {
      clearInterval(window.timerInterval);
    }
  }, 1000);
};
