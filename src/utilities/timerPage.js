import { MINUTES, TIME_LEFT_IN_SEC } from '../constants.js';
import { remainingTime } from '../pages/welcomePage.js';
import { createTimerElement } from '../views/timerView.js';

export let timerInterval;
export const initTimer = () => {

  if (window.timerElement) {
    clearInterval(window.timerInterval);
  }
  const timerContainer = document.getElementById("timer-container");
  const timerElement = createTimerElement();
  timerContainer.innerHTML = '';
  timerElement.innerHTML = '';

  if (window.remainingTime === undefined) {
    window.remainingTime = TIME_LEFT_IN_SEC;
  }
  timerContainer.appendChild(timerElement);
  const updateTimerDisplay = (time) => {
    const minutes = String(Math.floor(time / MINUTES)).padStart(2, '0');
    const seconds = String(time % MINUTES).padStart(2, '0');
    timerElement.textContent = `Time left: ${minutes}:${seconds}`;
  };

  updateTimerDisplay(window.remainingTime);

  window.timerInterval = setInterval(() => {
    if (window.remainingTime > 0) {
      window.remainingTime--;
      if (window.remainingTime === 30) {
        timerElement.classList.add("warning");
      }else if (window.remainingTime === 0){
        timerElement.classList.remove("warning");
      }
      updateTimerDisplay(window.remainingTime);
    } else {
      
      clearInterval(window.timerInterval);
    }
  }, 1000);

  

};
