import data from './javascript/data';
import renderPage from './javascript/renderPage';
// import renderKeys from './javascript/renderKeys';
import animatePressButton from './javascript/animatePressButton';
import mouseClick from './javascript/mouseEvent';
import '../dist/css/reset.css';
import '../dist/css/normalize.css';
import '../dist/css/style.min.css';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];

  renderPage(body, data);

  const textarea = document.querySelector('.wrapper__input-text');

  textarea.focus();
  console.log(textarea.value);

  textarea.addEventListener('blur', () => {
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  });

  document.addEventListener('keydown', animatePressButton);
  document.addEventListener('keyup', animatePressButton);
  document.addEventListener('click', mouseClick);
};
