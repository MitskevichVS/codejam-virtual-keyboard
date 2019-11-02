import renderKeys from './renderKeys';

const renderPage = (body, keys, gridAreaCodes) => {
  const container = document.createElement('div');
  container.classList.add('wrapper');
  body.appendChild(container);

  const header = document.createElement('h1');
  header.className = 'wrapper__header';
  header.insertAdjacentHTML('afterbegin', 'Codejam Keyboard Event');
  container.appendChild(header);

  const inputArea = document.createElement('textarea');
  inputArea.className = 'wrapper__input-text';
  container.appendChild(inputArea);

  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'wrapper__container';
  container.appendChild(keyboardContainer);

  const keysArray = keys.split(' ');

  renderKeys(keysArray);

  const buttonsArray = document.querySelectorAll('.wrapper__container__button');

  buttonsArray.forEach((item, index) => {
    const button = item;
    button.style.gridArea = gridAreaCodes[index];
    button.classList.add(gridAreaCodes[index]);
  });
};

export default renderPage;
