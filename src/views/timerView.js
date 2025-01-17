import {AUDIO_ELEMENT_ID} from  '../constants.js';

export const createTimerElement = () => {
  const timerContainer = document.createElement('span');
  timerContainer.classList.add('timer');
  return timerContainer;
};

export const createAudioElement = () => {
  const audioELement = document.createElement('audio');
  audioELement.id = AUDIO_ELEMENT_ID;
  audioELement.src = 'public/remainder-alarm.mp3';
  audioELement.preload = 'auto'

  return audioELement;
}
