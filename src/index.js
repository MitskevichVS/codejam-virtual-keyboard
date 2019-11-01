import renderPage from './javascript/renderPage';
// import renderKeys from './javascript/renderKeys';
import animatePressButton from './javascript/animatePressButton';
import '../dist/css/reset.css';
import '../dist/css/normalize.css';
import '../dist/css/style.min.css';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  const engKeys = '~ 1 2 3 4 5 6 7 8 9 0 - = ← Tab q w e r t y u i o p [ ] \u005C ↑ a s d f g h j k l ; \' Enter Shift z x c v b n m , . \u002F Shift Ctrl Win Alt \xa0 Alt Ctrl';
  const gridAreaCodes = ['til', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'minus', 'equal', 'back',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'lbrace', 'rbrace', 'rslash', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicolon', 'quotes', 'enter',
    'lshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'dot', 'lslash', 'rshift', 'lctrl', 'win', 'lalt', 'space', 'ralt', 'rctrl'];

  renderPage(body, engKeys, gridAreaCodes);

  document.addEventListener('keydown', animatePressButton);
};
