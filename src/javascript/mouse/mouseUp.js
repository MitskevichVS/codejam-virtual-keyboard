const mouseUp = (changeRegister, event) => {
  switch (event.target.innerText) {
    case ('Shift'):
      changeRegister();
      break;
    default:
      break;
  }
};

export default mouseUp;
