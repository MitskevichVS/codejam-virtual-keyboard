const animatePressButton = (event) => {
  event.preventDefault();
  const element = document.querySelector(`.${event.code}`);

  if (element === null) return;

  element.classList.toggle('wrapper__container__button-pressed');

  if (event.type === 'keydown') {
    element.click();
  }
};

export default animatePressButton;
