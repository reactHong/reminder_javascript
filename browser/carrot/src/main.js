'use strict';

import Popup from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

class Game {
  static TIMELIMIT = 10;
  static CARROTS = 10;
  static BUGS = 20;

  constructor() {
    this.popup = new Popup();
    this.popup.setClickListener(() => this.replay());

    this.field = new Field(Game.CARROTS, Game.BUGS);
    this.field.setListeners(
      () => this.timer !== null,
      (item) => {
        if (item === 'carrot') this.clickCarrot();
        else if (item === 'bug') this.clickBug();
      }
    );

    this.timer = null;
    this.timeLimit = Game.TIMELIMIT;
    this.carrots = Game.CARROTS;

    this.divTime = document.querySelector('.game-time');
    this.divCarrots = document.querySelector('.game-carrots');

    this.playBtn = document.querySelector('.game-play');
    this.playBtn.addEventListener('click', this.play.bind(this));
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  start() {
    this.timeLimit = Game.TIMELIMIT;
    this.carrots = Game.CARROTS;
    this.field.init();
  }

  play() {
    if (this.timer) {
      this.stop();
    } else {
      this.timer = setInterval(() => {
        this.timeLimit--;
        this.invalidate();

        if (this.timeLimit === 0) {
          this.gameover();
          sound.playAlert();
        }
      }, 1000);
      this.showStopButton();
      sound.playBackground();
    }
  }

  stop() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.popup.showWithText('Replay❓');
    sound.stopBackground();
  }

  replay() {
    this.start();
    this.invalidate();
    this.play();
  }

  gameover() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.popup.showWithText('YOU LOST');
    sound.stopBackground();
  }

  win() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.popup.showWithText('YOU WON');
    sound.stopBackground();
    sound.playWin();
  }

  invalidate() {
    this.divTime.innerHTML = `0:${this.timeLimit}`;
    this.divCarrots.innerHTML = this.carrots;
  }

  clickCarrot() {
    this.carrots--;
    this.carrots === 0 ? this.win() : '';
    this.invalidate();
    sound.playCarrot();
  }

  clickBug() {
    this.gameover();
    sound.playBug();
  }

  show(target) {
    target.removeAttribute('style');
    if (target.matches('.hide')) target.classList.remove('hide');
  }

  hide(target) {
    if (!target.matches('.hide')) target.classList.add('hide');
  }

  hideByVisibility(target) {
    target.setAttribute('style', 'visibility: hidden;');
  }

  showPlayButton() {
    this.show(this.playBtn);
    this.playBtn.querySelector('.fas').classList.remove('fa-stop');
    this.playBtn.querySelector('.fas').classList.add('fa-play');
  }

  showStopButton() {
    this.show(this.playBtn);
    this.playBtn.querySelector('.fas').classList.remove('fa-play');
    this.playBtn.querySelector('.fas').classList.add('fa-stop');
  }
}

window.addEventListener('load', () => {
  const game = new Game();
  game.start();
});
