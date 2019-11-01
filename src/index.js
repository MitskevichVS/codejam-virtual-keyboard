import renderPage from './javascript/renderPage';
// import renderKeys from './javascript/renderKeys';
import animatePressButton from './javascript/animatePressButton';
import '../dist/css/reset.css';
import '../dist/css/normalize.css';
import '../dist/css/style.min.css';

window.onload = () => {
  const body = document.getElementsByTagName('body')[0];
  const buttonsId = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
    'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
    'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK',
    'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
    'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight'];
  const engKeys = '~ 1 2 3 4 5 6 7 8 9 0 - = ← Tab q w e r t y u i o p [ ] \u005C ↑ a s d f g h j k l ; \' Enter Shift z x c v b n m , . \u002F Shift Ctrl Win Alt \xa0 Alt Ctrl';

  renderPage(body, engKeys, buttonsId);

  document.addEventListener('keydown', animatePressButton);
};
