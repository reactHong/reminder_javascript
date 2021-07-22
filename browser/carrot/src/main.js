'use strict';

import Popup from './popup.js';

class Game {
  static TIMELIMIT = 10;
  static CARROTS = 10;
  static BUGS = 20;
  static CARROT_SIZE = 80;
  static BUG_SIZE = 50;

  constructor() {
    this.popup = new Popup();
    this.popup.setClickListener(() => this.replay());

    this.timer = null;
    this.timeLimit = Game.TIMELIMIT;
    this.carrots = Game.CARROTS;

    this.divTime = document.querySelector('.game-time');
    this.divCarrots = document.querySelector('.game-carrots');
    this.divUnitArea = document.querySelector('.game-unitarea');
    this.divUnitArea.addEventListener('click', (e) => {
      if (!this.timer) return;

      if (e.target.matches('.carrot')) this.clickCarrot(e.target);
      else if (e.target.matches('.bug')) this.clickBug();
    });
    // this.divGameover = document.querySelector('.game-over');

    this.playBtn = document.querySelector('.game-play');
    this.playBtn.addEventListener('click', this.play.bind(this));

    // this.replayBtn = document.querySelector('.game-replay');
    // this.replayBtn.addEventListener('click', this.replay.bind(this));

    this.alertSound = new Audio('./sound/alert.wav');
    this.bgSound = new Audio('./sound/bg.mp3');
    this.bugSound = new Audio('./sound/bug_pull.mp3');
    this.carrotSound = new Audio('./sound/carrot_pull.mp3');
    this.winSound = new Audio('./sound/game_win.mp3');
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  start() {
    this.timeLimit = Game.TIMELIMIT;
    this.carrots = Game.CARROTS;

    const imgs = this.divUnitArea.querySelectorAll('img');
    imgs.forEach((img) => img.remove());

    this.addItems('carrot', Game.CARROTS, Game.CARROT_SIZE, 'img/carrot.png');
    this.addItems('bug', Game.BUGS, Game.BUG_SIZE, 'img/bug.png');
  }

  play() {
    if (this.timer) {
      this.stop();
    } else {
      this.timer = setInterval(() => {
        this.timeLimit--;
        this.invalidate();

        if (this.timeLimit === 0) {
          this.alertSound.play();
          this.gameover();
        }
      }, 1000);
      this.showStopButton();
      this.bgSound.currentTime = 0;
      this.bgSound.play();
    }
  }

  stop() {
    this.stopTimer();
    this.popup.showWithText('Replay❓');
    this.hideByVisibility(this.playBtn);
    this.bgSound.pause();
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
    this.bgSound.pause();
  }

  win() {
    this.stopTimer();
    this.hideByVisibility(this.playBtn);
    this.popup.showWithText('YOU WON');
    this.winSound.play();
  }

  invalidate() {
    this.divTime.innerHTML = `0:${this.timeLimit}`;
    this.divCarrots.innerHTML = this.carrots;
  }

  clickCarrot(carrot) {
    this.carrotSound.play();

    carrot.remove();

    this.carrots--;
    this.invalidate();

    if (this.carrots === 0) this.win();
  }

  clickBug() {
    this.bugSound.play();
    this.gameover();
  }

  addItems(className, itemCount, itemSize, imgSrc) {
    const width = this.divUnitArea.offsetWidth;
    const height = this.divUnitArea.offsetHeight;

    for (let i = 0; i < itemCount; i++) {
      const randomX = Math.random() * (width - itemSize);
      const randomY = Math.random() * (height - itemSize);
      const style = `left:${randomX}px;top:${randomY}px;`;

      const item = document.createElement('img');
      item.className = className;
      item.setAttribute('src', imgSrc);
      item.setAttribute('style', style);
      this.divUnitArea.appendChild(item);
    }
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
