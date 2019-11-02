const renderKeys = (keysArray, language) => {
  const keyboardContainer = document.querySelector('.wrapper__container');
  console.log(keyboardContainer.childNodes);
  while (keyboardContainer.firstChild) {
    keyboardContainer.removeChild(keyboardContainer.firstChild);
  }
  const keys = keysArray;
  const lang = language;

  keys.forEach((item) => {
    const key = document.createElement('div');
    key.classList.add('wrapper__container__button');

    switch (lang) {
      case ('En'):
        if (item.length === 5) {
          key.insertAdjacentHTML('afterbegin', `${item[3]}`);
        } else {
          key.classList.add('wrapper__container__button-nonchar');
          key.insertAdjacentHTML('afterbegin', `${item[5]}`);
        }
        break;
      case ('Ru'):
        if (item.length === 5) {
          key.insertAdjacentHTML('afterbegin', `${item[1]}`);
        } else {
          key.classList.add('wrapper__container__button-nonchar');
          key.insertAdjacentHTML('afterbegin', `${item[5]}`);
        }
        break;
      default:
        break;
    }

    const [gridArea] = item;
    key.style.gridArea = gridArea;
    key.classList.add(gridArea);

    keyboardContainer.appendChild(key);
  });
};

export default renderKeys;
