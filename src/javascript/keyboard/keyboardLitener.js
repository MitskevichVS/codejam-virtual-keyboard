import animatePressButton from './animatePressButton';
import checkLangChange from './checkLangChange';
import checkRegisterButtons from './checkRegisterButtons';

const keyboardListener = (setLanguage, setRegister, event) => {
  checkLangChange(setLanguage, event);
  checkRegisterButtons(setRegister, event);
  animatePressButton(event);
};

export default keyboardListener;
