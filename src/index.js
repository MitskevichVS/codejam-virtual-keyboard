import data from './javascript/data';
import renderPage from './javascript/page/renderPage';
import renderKeys from './javascript/page/renderKeys';
import keyboardListener from './javascript/keyboard/keyboardLitener';
import mouseClick from './javascript/mouse/mouseEvent';
import mouseDown from './javascript/mouse/mouseDown';
import mouseUp from './javascript/mouse/mouseUp';
import '../dist/css/reset.css';
import '../dist/css/normalize.css';
import '../dist/css/style.min.css';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  let language = 'En';
  let register = 'sm';

  const changeRegister = () => {
    switch (register) {
      case ('sm'):
        register = 'md';
        localStorage.register = register;
        renderKeys(data, language, register);
        break;
      case ('md'):
        register = 'sm';
        localStorage.register = register;
        renderKeys(data, language, register);
        break;
      default:
        renderKeys(data, language, register);
        break;
    }
  };

  const changeLanguage = () => {
    switch (language) {
      case ('En'):
        language = 'Ru';
        localStorage.lang = language;
        renderKeys(data, language, register);
        break;
      case ('Ru'):
        language = 'En';
        localStorage.lang = language;
        renderKeys(data, language, register);
        break;
      default:
        renderKeys(data, language, register);
        break;
    }
  };

  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }


  renderPage(body, data, language, register);

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
