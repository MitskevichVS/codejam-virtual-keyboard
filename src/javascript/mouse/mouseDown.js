import animatePressButton from '../keyboard/animatePressButton';

const mouseDown = (changeRegister, event) => {
  animatePressButton(event);
  switch (event.target.innerText) {
    case ('Shift'):
      changeRegister(event.target.innerText);
      animatePressButton(event);
      break;
    case ('CapsLock'):
      changeRegister(event.target.innerText);
      animatePressButton(event);
      break;
    default:
      break;
  }
};

export default mouseDown;
