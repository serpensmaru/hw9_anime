import './liker.css';
import likerHTML from './liker.html';
import Heart from './Heart';

export default class Liker {
  constructor(parent) {
    this.element = null;
    this.els = {
      btn: null,
    };

    this.init(parent);
  }

  init(parent) {
    let tempWrapEl = document.createElement('div');
    tempWrapEl.insertAdjacentHTML('afterbegin', likerHTML);

    this.element = tempWrapEl.querySelector('.widget-liker');
    tempWrapEl = null;

    this.els.btn = this.element.querySelector('.widget-liker__btn');
    // eslint-disable-next-line no-new
    this.els.btn.addEventListener('click', () => { new Heart(this.element); });

    if (parent) {
      this.parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent;
      this.parentEl.append(this.element);
    }
  }
}
