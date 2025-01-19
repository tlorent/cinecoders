import {
  MINUTES,
  TIME_LEFT_IN_SEC,
  REMAINDER,
  INTERVAL,
  PLAY_AUDIO_INTERVAL,
} from '../constants.js';

import { createTimerElement, createAudioElement } from '../views/timerView.js';
import { quizFinished, toFinalPage } from '../pages/questionPage.js';

export const initTimer = () => {
  const wrapper = document.querySelector('.wrapper');
  const timerElement = createTimerElement();
  wrapper.prepend(timerElement);

  timerElement.innerHTML = '';

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
    if (quizFinished()) {
      clearInterval(window.timerInterval);
      timerElement.classList.remove('warning');
    }
    if (window.remainingTime > 0) {
      window.remainingTime--;
      if (window.remainingTime === REMAINDER) {
        timerElement.classList.add('warning');
        const audio = createAudioElement();
        audio.play();
        setTimeout(() => {
          audio.pause();
          timerElement.classList.remove('warning');
        }, PLAY_AUDIO_INTERVAL);
      } else if (window.remainingTime === 0) {
        timerElement.classList.remove('warning');
      }
      updateTimerDisplay(window.remainingTime);
    } else {
      toFinalPage();
      clearInterval(window.timerInterval);
    }
  }, INTERVAL);
};
