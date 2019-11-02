const mouseClick = (event) => {
  const textarea = document.querySelector('.wrapper__input-text');

  if (event.target.classList[0] !== 'wrapper__container__button') return;

  const char = event.target.innerText;

  if (char.length > 1) return;

  textarea.insertAdjacentHTML('beforeend', char);
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
};

export default mouseClick;
