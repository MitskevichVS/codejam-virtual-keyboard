const animatePressButton = (event) => {
  console.log(event.code);
  console.log(document.querySelector(`.${event.code}`));
  const element = document.querySelector(`.${event.code}`);

  element.classList.toggle('wrapper__container__button-pressed');
};

export default animatePressButton;
