const about = document.querySelector('.about');
const aboutButton = about.querySelector('.about__button');
const aboutItemHidden = about.querySelectorAll('.about__item--hidden');
const aboutItemSuppliers = about.querySelector('.about__item--suppliers');

const onShowAboutText = () => {
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.add('about__item--nojs');
  }
  aboutItemSuppliers.style.margin = '0 0 18px';
  aboutItemSuppliers.classList.add('about__item--suppliers-show');
  aboutButton.removeEventListener('click', onShowAboutText);
  aboutButton.addEventListener('click', onCloseAboutText);
  aboutButton.innerHTML = 'Свернуть';
};

const onCloseAboutText = () => {
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.remove('about__item--nojs');
  }
  aboutItemSuppliers.style.margin = '0';
  aboutItemSuppliers.classList.remove('about__item--suppliers-show');
  aboutButton.removeEventListener('click', onCloseAboutText);
  aboutButton.addEventListener('click', onShowAboutText);
  aboutButton.innerHTML = 'Подробнее';
};

const showAboutText = () => {
  aboutButton.classList.remove('about__button--nojs');
  aboutItemSuppliers.classList.remove('about__item--suppliers-nojs');
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.remove('about__item--nojs');
  }
  aboutButton.addEventListener('click', onShowAboutText);
};

export {showAboutText};
