'use strict';

import { GameBuilder, Reason } from './game.js';
import Popup from './popup.js';
import * as sound from './sound.js';

// window.addEventListener('load', () => {
const popup = new Popup();
const game = new GameBuilder()
  .withDuration(10)
  .withCarrots(10)
  .withBugs(10)
  .build();
game.setFinishListener((reason) => {
  sound.stopBackground();

  switch (reason) {
    case Reason.stop:
      popup.showWithText('Replay❓');
      sound.playAlert();
      break;
    case Reason.win:
      popup.showWithText('YOU WON');
      sound.playWin();
      break;
    case Reason.lost:
      popup.showWithText('YOU LOST');
      sound.playBug();
      break;
    default:
      throw Error('not valid reason');
  }
});
popup.setClickListener(() => game.start());
// });
