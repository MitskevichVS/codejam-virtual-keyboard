const checkRegisterButtons = (setRegister, event) => {
  let shiftPressed = false;
  if (event.shiftKey && event.type === 'keydown') {
    if (event.repeat) return;
    shiftPressed = true;
    setRegister();
  } else if (shiftPressed && event.type === 'keyup') {
    shiftPressed = false;
    setRegister();
  } else if (event.key === 'CapsLock' && event.type === 'keydown') {
    setRegister();
  }
};

export default checkRegisterButtons;
