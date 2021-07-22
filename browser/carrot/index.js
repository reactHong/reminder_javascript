class Game {
  static TIMELIMIT = 10;
  static CARROTS = 10;
  static BUGS = 20;
  static CARROT_SIZE = 80;
  static BUG_SIZE = 50;

  constructor() {
    this.timer = null;
    this.timeLimit = Game.TIMELIMIT;
    this.carrots = Game.CARROTS;
    this.result = null;

    this.divTime = document.querySelector('.game-time');
    this.divCarrots = document.querySelector('.game-carrots');
    this.divUnitArea = document.querySelector('.game-unitarea');
    this.divUnitArea.addEventListener('click', (e) => {
      if (!this.timer) return;

      if (e.target.matches('.carrot')) this.clickCarrot(e.target);
      else if (e.target.matches('.bug')) this.clickBug();
    });
    this.divGameover = document.querySelector('.game-over');

    this.playBtn = document.querySelector('.game-play');
    this.stopBtn = document.querySelector('.game-stop');
    this.replayBtn = document.querySelector('.game-replay');
    this.playBtn.addEventListener('click', this.play.bind(this));
    this.stopBtn.addEventListener('click', this.stop.bind(this));
    this.replayBtn.addEventListener('click', this.replay.bind(this));

    this.alertSound = new Audio('./sound/alert.wav');
    this.bgSound = new Audio('./sound/bg.mp3');
    this.bugSound = new Audio('./sound/bug_pull.mp3');
    this.carrotSound = new Audio('./sound/carrot_pull.mp3');
    this.winSound = new Audio('./sound/game_win.mp3');
  }

  show(target) {
    target.removeAttribute('style');
    if (target.matches('.hide')) target.classList.remove('hide');
  }

  hide(target, asVisibility) {
    if (asVisibility) target.setAttribute('style', 'visibility: hidden;');
    else if (!target.matches('.hide')) target.classList.add('hide');
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
    this.timer = setInterval(() => {
      this.timeLimit--;
      this.invalidate();

      if (this.timeLimit === 0) {
        this.alertSound.play();
        this.gameover();
      }
    }, 1000);
    this.hide(this.playBtn);
    this.show(this.stopBtn);

    this.bgSound.currentTime = 0;
    this.bgSound.play();
  }

  stop() {
    this.stopTimer();
    this.hide(this.stopBtn, true);
    this.hide(this.playBtn);
    this.showPopupWithText('Replay❓');

    this.bgSound.pause();
  }

  replay() {
    this.hide(this.divGameover);
    this.start();
    this.invalidate();
    this.play();
  }

  gameover() {
    this.stopTimer();
    this.hide(this.stopBtn, true);
    this.hide(this.playBtn);
    this.showPopupWithText('YOU LOST');

    this.bgSound.pause();
  }

  win() {
    this.stopTimer();
    this.hide(this.stopBtn, true);
    this.hide(this.playBtn);
    this.showPopupWithText('YOU WON');

    this.winSound.play();
  }

  invalidate() {
    this.divTime.innerHTML = `0:${this.timeLimit}`;
    this.divCarrots.innerHTML = this.carrots;
  }

  showPopupWithText(text) {
    this.show(this.divGameover);
    this.divGameover.querySelector('.game-endtext').innerHTML = text;
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
}

window.addEventListener('load', () => {
  const game = new Game();
  game.start();
});
