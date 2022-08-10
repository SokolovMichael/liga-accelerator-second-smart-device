const about = document.querySelector('.about');
const aboutButton = about.querySelector('.about__button');
const aboutItemHidden = about.querySelectorAll('.about__item--hidden');

const onShowAboutText = () => {
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.add('about__item--nojs');
  }
  aboutButton.removeEventListener('click', onShowAboutText);
  aboutButton.addEventListener('click', onCloseAboutText);
  aboutButton.innerHTML = 'Свернуть';
};

const onCloseAboutText = () => {
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.remove('about__item--nojs');
  }
  aboutButton.removeEventListener('click', onCloseAboutText);
  aboutButton.addEventListener('click', onShowAboutText);
  aboutButton.innerHTML = 'Подробнее';
};

const showAboutText = () => {
  aboutButton.classList.remove('about__button--nojs');
  for (let i = 0; i < aboutItemHidden.length; i++) {
    aboutItemHidden[i].classList.remove('about__item--nojs');
  }
  aboutButton.addEventListener('click', onShowAboutText);
};

export {showAboutText};
