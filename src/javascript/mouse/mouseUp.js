import animatePressButton from '../keyboard/animatePressButton';

const mouseUp = (changeRegister, event) => {
  switch (event.target.innerText) {
    case ('Shift'):
      changeRegister(event.target.innerText);
      animatePressButton(event);
      break;
    default:
      animatePressButton(event);
      break;
  }
};

export default mouseUp;
