const renderKeys = (keysArray) => {
  const keyboardContainer = document.querySelector('.wrapper__container');
  let keys = keysArray;

  if (!Array.isArray(keys)) {
    keys = keys.split(' ');
  }

  keys.forEach((item) => {
    const key = document.createElement('div');
    key.classList.add('wrapper__container__button', `${item}`);
    if (item.length > 1 || item === '\xa0') {
      key.classList.add('wrapper__container__button-nonchar');
    }
    key.insertAdjacentHTML('afterbegin', `${item}`);
    keyboardContainer.appendChild(key);
  });
};

export default renderKeys;
