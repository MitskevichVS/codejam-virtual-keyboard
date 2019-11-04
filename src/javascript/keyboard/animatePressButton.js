const animatePressButton = (event) => {
  event.preventDefault();
  const target = event.code === undefined ? event.target.classList[2] : event.code;
  const element = document.querySelector(`.${target}`);

  if (element === null && event.type !== 'mouseup') return;

  if (event.type === 'keydown' || event.type === 'mousedown') {
    element.click();
    element.classList.add('wrapper__container__button-pressed');
  } else {
    const nodeList = document.querySelectorAll('.wrapper__container__button-pressed');
    nodeList.forEach((item) => {
      item.classList.remove('wrapper__container__button-pressed');
    });
  }
};

export default animatePressButton;
