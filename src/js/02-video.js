import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const LOCALSTORAGE_KEY = 'videoplayer - current - time';

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

const onPlay = function ({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, `${seconds}`);
};

player.on('timeupdate', throttle(onPlay, 1000));
