const renderKeys = (keysArray, language, register) => {
  const keyboardContainer = document.querySelector('.wrapper__container');

  while (keyboardContainer.firstChild) {
    keyboardContainer.removeChild(keyboardContainer.firstChild);
  }

  const keys = keysArray;
  const lang = language;

  keys.forEach((item) => {
    const key = document.createElement('div');
    key.classList.add('wrapper__container__button');
    let charPosition;

    switch (lang) {
      case ('En'):
        if (register === 'sm') {
          charPosition = 3;
        } else charPosition = 4;
        break;
      case ('Ru'):
        if (register === 'sm') {
          charPosition = 1;
        } else charPosition = 2;
        break;
      default:
        charPosition = 3;
        break;
    }

    if (item.length === 5) {
      key.insertAdjacentHTML('afterbegin', `${item[charPosition]}`);
    } else {
      key.classList.add('wrapper__container__button-nonchar');
      key.insertAdjacentHTML('afterbegin', `${item[5]}`);
    }

    const [gridArea] = item;
    key.style.gridArea = gridArea;
    key.classList.add(gridArea);

    keyboardContainer.appendChild(key);
  });
};

export default renderKeys;
