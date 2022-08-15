import {isEscapeKey} from './utils/is-escape-key.js';

const nav = document.querySelector('.nav__wrapper');
const openModalWindowButton = nav.querySelector('button');
const modal = document.querySelector('.modal');
const closeModalWindowButton = modal.querySelector('button[type="button"]');
const formPopupInput = modal.querySelector('input[type="text"]');

const onModalWindowOpen = () => {
  modal.classList.remove('modal--closed');
  openModalWindowButton.removeEventListener('click', onModalWindowOpen);
  closeModalWindowButton.addEventListener('click', onModalWindowClose);
  document.addEventListener('keydown', onModalWindowEscKeydown);
  document.addEventListener('click', onModalWindowOutsideClickClose);
  formPopupInput.focus();
};

const onModalWindowClose = () => {
  modal.classList.add('modal--closed');
  closeModalWindowButton.removeEventListener('click', onModalWindowClose);
  openModalWindowButton.addEventListener('click', onModalWindowOpen);
  document.removeEventListener('keydown', onModalWindowEscKeydown);
  document.removeEventListener('click', onModalWindowOutsideClickClose);
};

const onModalWindowEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onModalWindowClose();
  }
};

const onModalWindowOutsideClickClose = (evt) => {
  if (!document.querySelector('.modal__wrapper').contains(evt.target)) {
    if (evt.target !== openModalWindowButton) {
      onModalWindowClose();
    }
  }
};

const openModal = () => {
  nav.classList.remove('nav__wrapper--nojs');

  if (getComputedStyle(openModalWindowButton).display !== 'none') {
    openModalWindowButton.addEventListener('click', onModalWindowOpen);
  }
};

export {openModal};
