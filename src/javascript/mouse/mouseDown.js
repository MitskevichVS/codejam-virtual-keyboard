const mouseDown = (changeRegister, event) => {
  switch (event.target.innerText) {
    case ('Shift'):
      changeRegister();
      break;
    case ('CapsLock'):
      changeRegister();
      break;
    default:
      break;
  }
};

export default mouseDown;
