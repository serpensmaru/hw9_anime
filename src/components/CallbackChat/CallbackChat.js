import './callback-chat.css';
import callbackChatHTML from './callback-chat.html';

export default class CallbackChat {
  constructor() {
    this.element = null;
    this.els = {
      btnActive: null,
      chatBody: null,
      btnClose: null,
      form: null,
    };

    this.isChatBodyHidden = true;
    this.init();
  }

  init() {
    let tempWrapEl = document.createElement('div');
    tempWrapEl.insertAdjacentHTML('afterbegin', callbackChatHTML);

    this.element = tempWrapEl.querySelector('.widget-callback-chat');
    tempWrapEl = null;

    this.els.btnActive = this.element.querySelector('.widget-callback-chat__btn-active');
    this.els.btnActive.addEventListener('click', this.onBtnActiveClick.bind(this));

    this.els.chatBody = this.element.querySelector('.widget-callback-chat__body');
    this.els.chatBody.addEventListener('transitionend', () => {
      if (this.isChatBodyHidden) this.els.chatBody.classList.add('_hide');
    });

    this.els.btnClose = this.element.querySelector('.widget-callback-chat__btn-close');
    this.els.btnClose.addEventListener('click', this.onBtnCloseClick.bind(this));

    this.els.form = this.element.querySelector('.widget-callback-chat__form');
    this.els.form.addEventListener('submit', this.onFromSubmit.bind(this));

    document.getElementsByTagName('body')[0].append(this.element);
  }

  onBtnActiveClick() {
    this.els.btnActive.classList.add('widget-callback-chat__btn-active_hidden');
    this.isChatBodyHidden = false;
    this.els.chatBody.classList.remove('_hide');
    setTimeout(() => { this.els.chatBody.classList.add('widget-callback-chat__body_large'); }, 0);
  }

  onBtnCloseClick() {
    this.els.btnActive.classList.remove('widget-callback-chat__btn-active_hidden');
    this.isChatBodyHidden = true;
    this.els.chatBody.classList.remove('widget-callback-chat__body_large');
  }

  // eslint-disable-next-line class-methods-use-this
  onFromSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('onFromSubmit');
  }
}
