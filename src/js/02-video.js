import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

playOnPause();

function onPlay(seconds) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
}

function playOnPause() {
  const pause = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }
  player.setCurrentTime(pause.seconds);
}
