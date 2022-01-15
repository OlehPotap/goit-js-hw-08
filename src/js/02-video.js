'use strict';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

player.on('timeupdate', function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
});
