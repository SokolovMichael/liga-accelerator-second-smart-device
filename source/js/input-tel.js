const formFieldset = document.querySelector('.form__fieldset');
const formItemTel = formFieldset.querySelector('.form__item--tel');
const formWrapper = formFieldset.querySelector('.form__wrapper');
const sendFormButton = formWrapper.querySelector('button');
const formFieldsetPopup = document.querySelector('.form-popup__fieldset');
const formItemTelPopup = formFieldsetPopup.querySelector('.form-popup__item--tel');
const sendFormButtonPopup = formFieldsetPopup.querySelector('button');
const modal = document.querySelector('.modal');

const inputTel = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const eventCalllback = (evt) => {
      const el = evt.target;
      const clearVal = el.dataset.phoneClear;
      const pattern = el.dataset.phonePattern;
      const matrixDef = '+7(___) ___-__-__';
      const matrix = pattern ? pattern : matrixDef;
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = evt.target.value.replace(/\D/g, '');

      if (clearVal !== 'false' && evt.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          if (modal.classList.contains('modal--closed')) {
            formItemTel.classList.add('form__item--alert');
            formWrapper.classList.add('form__wrapper--not-active');
            sendFormButton.disabled = true;
          } else {
            formItemTelPopup.classList.add('form-popup__item--alert');
            formFieldsetPopup.classList.add('form-popup__fieldset--not-active');
            sendFormButtonPopup.disabled = true;
          }
          return;
        } else {
          if (modal.classList.contains('modal--closed')) {
            formItemTel.classList.remove('form__item--alert');
            formWrapper.classList.remove('form__wrapper--not-active');
            sendFormButton.disabled = false;
          } else {
            formItemTelPopup.classList.remove('form-popup__item--alert');
            formFieldsetPopup.classList.remove('form-popup__fieldset--not-active');
            sendFormButtonPopup.disabled = false;
          }
        }
      }

      if (def.length >= val.length) {
        val = def;
      }

      evt.target.value = matrix.replace(/./g, function (a) {
        let target = 0;

        if (/[_\d]/.test(a) && i < val.length) {
          target = val.charAt(i++);
        } else if (i >= val.length) {
          target = '';
        } else {
          target = a;
        }
        return target;
      });
    };

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phoneInputs) {
      for (let event of ['input', 'blur', 'focus']) {
        elem.addEventListener(event, eventCalllback);
      }
    }
  });
};

export {inputTel};
