const checkLangChange = (setLanguage, event) => {
  if (event.ctrlKey && event.altKey) {
    setLanguage();
  }
};

export default checkLangChange;
