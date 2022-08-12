const chapter = document.querySelector('.footer__chapter');
const chapterButton = chapter.querySelector('.chapter__button');
const chapterList = chapter.querySelector('.chapter__list');
const footerContacts = document.querySelector('.footer__contacts');
const footerContactsButton = footerContacts.querySelector('.footer-contacts__button');
const footerContactsList = footerContacts.querySelector('.footer-contacts__list');


const onCloseChapterMenu = () => {
  chapterButton.classList.remove('chapter__button--opened');
  chapterButton.classList.add('chapter__button--closed');
  chapterList.classList.remove('chapter__list--opened');
  chapterList.classList.add('chapter__list--closed');
  chapterButton.addEventListener('click', onShowChapterMenu);
  chapterButton.removeEventListener('click', onCloseChapterMenu);
};

const onShowChapterMenu = () => {
  chapterButton.classList.remove('chapter__button--closed');
  chapterButton.classList.add('chapter__button--opened');
  chapterList.classList.remove('chapter__list--closed');
  chapterList.classList.add('chapter__list--opened');
  chapterButton.removeEventListener('click', onShowChapterMenu);
  chapterButton.addEventListener('click', onCloseChapterMenu);
  onCloseFooterContactsMenu();
};


const onCloseFooterContactsMenu = () => {
  footerContactsButton.classList.remove('footer-contacts__button--opened');
  footerContactsButton.classList.add('footer-contacts__button--closed');
  footerContactsList.classList.remove('footer-contacts__list--opened');
  footerContactsList.classList.add('footer-contacts__list--closed');
  footerContactsButton.removeEventListener('click', onCloseFooterContactsMenu);
  footerContactsButton.addEventListener('click', onShowFooterContactsMenu);
};

const onShowFooterContactsMenu = () => {
  footerContactsButton.classList.remove('footer-contacts__button--closed');
  footerContactsButton.classList.add('footer-contacts__button--opened');
  footerContactsList.classList.remove('footer-contacts__list--closed');
  footerContactsList.classList.add('footer-contacts__list--opened');
  footerContactsButton.removeEventListener('click', onShowFooterContactsMenu);
  footerContactsButton.addEventListener('click', onCloseFooterContactsMenu);
  onCloseChapterMenu();
};

const openMenu = () => {
  chapter.classList.remove('chapter--nojs');
  footerContacts.classList.remove('footer-contacts--nojs');
  if (getComputedStyle(chapterButton).display !== 'none') {
    chapterButton.addEventListener('click', onShowChapterMenu);
  }

  if (getComputedStyle(footerContactsButton).display !== 'none') {
    footerContactsButton.addEventListener('click', onShowFooterContactsMenu);
  }
};

export {openMenu};
