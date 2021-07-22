'use strict';

export default class Popup {
  constructor() {
    this.divPopup = document.querySelector('.game-popup');
    this.replayBtn = document.querySelector('.game-replay');
    this.replayBtn.addEventListener('click', this.replay.bind(this));
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  replay() {
    this.onClick && this.onClick();
    this.hide();
  }

  showWithText(text) {
    if (this.divPopup.matches('.hide')) this.divPopup.classList.remove('hide');
    this.divPopup.querySelector('.game-endtext').innerHTML = text;
  }

  hide() {
    if (!this.divPopup.matches('.hide')) this.divPopup.classList.add('hide');
  }
}
