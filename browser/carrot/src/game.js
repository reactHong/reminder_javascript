'use strict';

import Field from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
  stop: 'stop',
  win: 'win',
  lost: 'lost',
});

export class GameBuilder {
  setFinishListener(onFinish) {
    this.onFinish = onFinish;
  }

  withDuration(duration) {
    this.duration = duration;
    return this;
  }

  withCarrots(carrots) {
    this.carrots = carrots;
    return this;
  }

  withBugs(bugs) {
    this.bugs = bugs;
    return this;
  }

  build() {
    return new Game(this.duration, this.carrots, this.bugs);
  }
}

class Game {
  constructor(duration, carrots, bugs) {
    this.field = new Field(carrots, bugs);
    this.field.setListeners(
      () => this.timer !== null,
      (item) => {
        if (item === 'carrot') this.clickCarrot();
        else if (item === 'bug') this.clickBug();
      }
    );

    this.timer = null;
    this.duration = duration;
    this.carrots = carrots;
    this.timeLimit = duration;
    this.score = 0;

    this.divTime = document.querySelector('.game-time');
    this.divCarrots = document.querySelector('.game-carrots');

    this.playBtn = document.querySelector('.game-play');
    this.playBtn.addEventListener('click', this.play.bind(this));

    this.init();
  }

  setFinishListener(onFinish) {
    this.onFinish = onFinish;
  }

  init() {
    this.timeLimit = this.duration;
    this.score = 0;
    this.field.init();
    this.invalidateCarrotCount(this.carrots);
  }

  start() {
    this.init();
    this.play();
  }

  play() {
    if (this.timer) {
      this.stop();
    } else {
      this.startTimer();
      this.showStopButton();
      sound.playBackground();
    }
  }

  stop() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.onFinish && this.onFinish(Reason.stop);
  }

  startTimer() {
    let timeLimit = this.duration;
    this.invalidateTime(timeLimit);

    this.timer = setInterval(() => {
      timeLimit--;
      this.invalidateTime(timeLimit);

      if (timeLimit === 0) {
        this.gameover();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  replay() {
    this.start();
    this.play();
  }

  gameover() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.onFinish && this.onFinish(Reason.lost);
  }

  win() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.onFinish && this.onFinish(Reason.win);
  }

  invalidateTime(timeLimit) {
    this.divTime.innerHTML = `0:${timeLimit}`;
  }

  invalidateCarrotCount(count) {
    this.divCarrots.innerHTML = count;
  }

  clickCarrot() {
    this.score++;
    this.score === this.carrots ? this.win() : '';
    this.invalidateCarrotCount(this.carrots - this.score);
    sound.playCarrot();
  }

  clickBug() {
    this.gameover();
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
