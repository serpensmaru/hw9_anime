import './collapse.css';
import collapseHTML from './collapse.html';

export default class Collapse {
  constructor({ parent, text } = {}) {
    this.element = null;
    this.els = {
      btn: null,
      textAnimation: null,
      textWrap: null,
      text: null,
    };

    this.isSpolerHidden = true;
    this.init(parent, text);
  }

  init(parent, text) {
    let tempWrapEl = document.createElement('div');
    tempWrapEl.insertAdjacentHTML('afterbegin', collapseHTML);

    this.element = tempWrapEl.querySelector('.widget-collapse');
    tempWrapEl = null;

    this.els.btn = this.element.querySelector('.widget-collapse__button');
    this.els.btn.addEventListener('click', this.onBtnClick.bind(this));

    this.els.textAnimation = this.element.querySelector('.widget-collapse__text-animation');
    this.els.textWrap = this.element.querySelector('.widget-collapse__text-wrap');
    this.els.text = this.element.querySelector('.widget-collapse__text');
    this.setText(text);

    if (parent) {
      this.parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent;
      this.parentEl.append(this.element);
    }
  }

  onBtnClick() {
    if (this.isSpolerHidden) {
      this.isSpolerHidden = false;
      this.els.textAnimation.style.height = `${this.els.textWrap.offsetHeight}px`;
    } else {
      this.isSpolerHidden = true;
      this.els.textAnimation.style.height = '0';
    }
  }

  setText(text) {
    if (text !== undefined) {
      this.els.text.textContent = text;
    }
  }
}
