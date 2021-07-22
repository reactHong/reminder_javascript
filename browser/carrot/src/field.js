'use strict';

export default class Field {
  static CARROT_SIZE = 80;
  static BUG_SIZE = 50;

  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.divField = document.querySelector('.game-field');
    this.divField.addEventListener('click', (e) => {
      if (!(this.onGameStarted && this.onGameStarted())) return;

      if (e.target.matches('.carrot')) this.clickCarrot(e.target);
      else if (e.target.matches('.bug')) this.clickBug();
    });
  }

  setListeners(onGameStarted, onClickItem) {
    this.onGameStarted = onGameStarted;
    this.onClickItem = onClickItem;
  }

  init() {
    this.divField.innerHTML = '';
    this.addItems(
      'carrot',
      this.carrotCount,
      Field.CARROT_SIZE,
      'img/carrot.png'
    );
    this.addItems('bug', this.bugCount, Field.BUG_SIZE, 'img/bug.png');
  }

  addItems(className, itemCount, itemSize, imgSrc) {
    const width = this.divField.offsetWidth;
    const height = this.divField.offsetHeight;

    for (let i = 0; i < itemCount; i++) {
      const randomX = Math.random() * (width - itemSize);
      const randomY = Math.random() * (height - itemSize);
      const style = `left:${randomX}px;top:${randomY}px;`;
      const item = document.createElement('img');

      item.className = className;
      item.setAttribute('src', imgSrc);
      item.setAttribute('style', style);
      this.divField.appendChild(item);
    }
  }

  clickCarrot(carrot) {
    carrot.remove();
    this.onClickItem && this.onClickItem('carrot');
  }

  clickBug() {
    this.onClickItem && this.onClickItem('bug');
  }
}
