import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));

const saveCurrentTime = () => {
  player.getCurrentTime().then((seconds) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
};

const loadCurrentTime = () => {
  const seconds = localStorage.getItem('videoplayer-current-time');
  if (seconds) {
    player.setCurrentTime(seconds);
  }
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

window.addEventListener('load', loadCurrentTime);


