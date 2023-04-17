import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function updateLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data);
}

player.on('timeupdate', throttle(updateLocalStorage, 1000));

try {
  player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));
} catch (err) {
  console.log(err);
}
