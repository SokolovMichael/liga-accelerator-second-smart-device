const anchors = document.querySelectorAll('a.intro__link');

const scrollAnchors = () => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

const scrollTo = () => {
  scrollAnchors();
};

export {scrollTo};
