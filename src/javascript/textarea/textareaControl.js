const textareaControl = (action, char) => {
  const textarea = document.querySelector('.wrapper__input-text');

  switch (action) {
    case ('add'):
      textarea.value += char;
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      break;
    case ('delete'):
      textarea.value = textarea.value.slice(0, textarea.value.length - 1);
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      break;
    default:
      break;
  }
};

export default textareaControl;
