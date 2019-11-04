import data from './javascript/data';
import renderPage from './javascript/page/renderPage';
import renderKeys from './javascript/page/renderKeys';
import keyboardListener from './javascript/keyboard/keyboardLitener';
import mouseClick from './javascript/mouse/mouseEvent';
import mouseDown from './javascript/mouse/mouseDown';
import mouseUp from './javascript/mouse/mouseUp';
import './styles/style.scss';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  let language = 'En';
  let register = 'sm';
  let capsFlag = false;

  const changeRegister = (targetButton) => {
    switch (register) {
      case ('sm'):
        register = 'md';
        if (targetButton === 'Shift') {
          capsFlag = false;
        } else {
          capsFlag = true;
        }
        renderKeys(data, language, register, capsFlag);
        break;
      case ('md'):
        register = 'sm';
        capsFlag = false;
        renderKeys(data, language, register, capsFlag);
        break;
      default:
        renderKeys(data, language, register, capsFlag);
        break;
    }
  };

  const changeLanguage = () => {
    switch (language) {
      case ('En'):
        language = 'Ru';
        localStorage.lang = language;
        renderKeys(data, language, register, capsFlag);
        break;
      case ('Ru'):
        language = 'En';
        localStorage.lang = language;
        renderKeys(data, language, register, capsFlag);
        break;
      default:
        renderKeys(data, language, register, capsFlag);
        break;
    }
  };

  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }


  renderPage(body, data, language, register, capsFlag);

  const textarea = document.querySelector('.wrapper__input-text');

  textarea.addEventListener('blur', () => {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  });

  document.addEventListener('keydown', keyboardListener.bind(this, changeLanguage, changeRegister));
  document.addEventListener('keyup', keyboardListener.bind(this, changeLanguage, changeRegister));
  document.addEventListener('click', mouseClick.bind(this, changeLanguage, changeRegister));
  document.addEventListener('mousedown', mouseDown.bind(this, changeRegister));
  document.addEventListener('mouseup', mouseUp.bind(this, changeRegister));
};
