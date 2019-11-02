const animatePressButton = (event) => {
  event.preventDefault();
  const element = document.querySelector(`.${event.code}`);

  if (element === null) return;

  if (event.type === 'keydown') {
    element.classList.add('wrapper__container__button-pressed');
    element.click();
  } else { element.classList.remove('wrapper__container__button-pressed'); }
};

export default animatePressButton;
