import data from './javascript/data';
import renderPage from './javascript/renderPage';
import renderKeys from './javascript/renderKeys';
import animatePressButton from './javascript/animatePressButton';
import mouseClick from './javascript/mouseEvent';
import '../dist/css/reset.css';
import '../dist/css/normalize.css';
import '../dist/css/style.min.css';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  let language = 'En';

  const changeLanguage = () => {
    switch (language) {
      case ('En'):
        language = 'Ru';
        localStorage.lang = language;
        renderKeys(data, language);
        break;
      case ('Ru'):
        language = 'En';
        localStorage.lang = language;
        renderKeys(data, language);
        break;
      default:
        renderKeys(data, language);
        break;
    }
  };

  if (localStorage.getItem('lang')) {
    language = localStorage.getItem('lang');
  }


  renderPage(body, data, language);

  const textarea = document.querySelector('.wrapper__input-text');

  textarea.addEventListener('blur', () => {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  });

  document.addEventListener('keydown', animatePressButton.bind(this, changeLanguage));
  document.addEventListener('keyup', animatePressButton.bind(this, changeLanguage));
  document.addEventListener('click', mouseClick);
};
