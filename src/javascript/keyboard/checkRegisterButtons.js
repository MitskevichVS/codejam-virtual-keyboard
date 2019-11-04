const checkRegisterButtons = (setRegister, event) => {
  if (event.shiftKey && event.type === 'keydown' && event.key === 'Shift') {
    if (event.repeat) return;
    setRegister(event.key);
  } else if (event.key === 'Shift' && event.type === 'keyup') {
    setRegister(event.key);
  } else if (event.key === 'CapsLock' && event.type === 'keydown') {
    if (event.repeat) return;
    setRegister(event.key);
  }
};

export default checkRegisterButtons;
