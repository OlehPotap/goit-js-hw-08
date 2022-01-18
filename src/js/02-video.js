'use strict';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

function storeTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(storeTime, 1000));
