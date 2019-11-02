const renderKeys = (keysArray) => {
  const keyboardContainer = document.querySelector('.wrapper__container');
  let keys = keysArray;

  if (!Array.isArray(keys)) {
    keys = keys.split(' ');
  }

  keys.forEach((item) => {
    const key = document.createElement('div');
    console.log(item);
    key.classList.add('wrapper__container__button', `${item}`);
    if (item.length === 5) {
      key.classList.add('wrapper__container__button-nonchar');
      key.insertAdjacentHTML('afterbegin', `${item[4]}`);
    } else {
      key.insertAdjacentHTML('afterbegin', `${item[5]}`);
    }
    keyboardContainer.appendChild(key);
  });
};

export default renderKeys;
