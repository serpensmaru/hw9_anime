import heartImg from './img/heart.png';

export default class Heart {
  constructor(parent) {
    let heartEl = document.createElement('div');
    heartEl.classList.add('widget-liker__heart');
    let hearImgEl = document.createElement('img');
    hearImgEl.src = heartImg;
    heartEl.append(hearImgEl);

    const random = Math.floor(1 + Math.random() * 4);
    heartEl.classList.add(`heart-animation_${random}`);

    heartEl.addEventListener('animationend', () => {
      heartEl.remove();
      heartEl = null;
      hearImgEl = null;
    });

    parent.append(heartEl);
  }
}
