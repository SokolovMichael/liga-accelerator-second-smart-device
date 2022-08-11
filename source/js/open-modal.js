import {isEscapeKey} from './utils/is-escape-key.js';

const openModalWindowButton = document.querySelector('.nav__button');
const modal = document.querySelector('.modal');
const closeModalWindowButton = modal.querySelector('.modal__button');
const formPopupInput = modal.querySelector('.form-popup__input');

const onModalWindowOpen = () => {
  modal.classList.remove('visually-hidden');
  openModalWindowButton.removeEventListener('click', onModalWindowOpen);
  closeModalWindowButton.addEventListener('click', onModalWindowClose);
  document.addEventListener('keydown', onModalWindowEscKeydown);
  document.addEventListener('click', onModalWindowOutsideClickClose);
  formPopupInput.focus();
};

const onModalWindowClose = () => {
  modal.classList.add('visually-hidden');
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
    if (evt.target.className !== 'nav__button') {
      onModalWindowClose();
    }
  }
};

const openModal = () => {
  if (getComputedStyle(openModalWindowButton).display !== 'none') {
    openModalWindowButton.addEventListener('click', onModalWindowOpen);
  }
};

export {openModal};
