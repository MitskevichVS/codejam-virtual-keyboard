import renderKeys from './renderKeys';

const renderPage = (body, keysData) => {
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

  renderKeys(keysData);

  const buttonsArray = document.querySelectorAll('.wrapper__container__button');

  buttonsArray.forEach((item, index) => {
    const button = item;
    const keysDataIndex = keysData[index];
    const [gridArea] = keysDataIndex;
    button.style.gridArea = gridArea;
    button.classList.add(gridArea);
  });
};

export default renderPage;
