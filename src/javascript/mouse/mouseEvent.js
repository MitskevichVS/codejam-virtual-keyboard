import textareaControl from '../textarea/textareaControl';
import data from '../data';

const mouseClick = (setLanguage, setRegister, event) => {
  const nonCharKeys = ['Shift', 'Ctrl', 'Alt', 'Win', 'BackSpace', 'CapsLock'];
  if (event.target.classList[0] !== 'wrapper__container__button') return;

  let char = event.target.innerText;

  if (char === 'Enter' || char === 'Tab ⇄') {
    const charArrayData = data.find(item => item[5] === char);
    [, char] = charArrayData;
  } else if (char === 'BackSpace') {
    textareaControl('delete', char);
  }

  if (nonCharKeys.includes(char)) return;

  textareaControl('add', char);
};

export default mouseClick;
