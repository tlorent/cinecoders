export const createTimerElement = () => {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'timer-container';
  timerContainer.classList.add('timer');
  return timerContainer;
};
