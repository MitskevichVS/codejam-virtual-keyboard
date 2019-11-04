const checkRegisterButtons = (setRegister, event) => {
  if (event.shiftKey && event.type === 'keydown' && event.key === 'Shift') {
    if (event.repeat) return;
    setRegister();
  } else if (event.key === 'Shift' && event.type === 'keyup') {
    setRegister();
  } else if (event.key === 'CapsLock' && event.type === 'keydown') {
    if (event.repeat) return;
    setRegister();
    const capsLockButton = document.querySelector('.CapsLock');
    capsLockButton.classList.toggle('wrapper__container__button-pressed');
  }
};

export default checkRegisterButtons;
