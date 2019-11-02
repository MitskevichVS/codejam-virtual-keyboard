const mouseDown = (changeRegister, event) => {
  switch (event.target.innerText) {
    case ('Shift'):
      changeRegister();
      break;
    default:
      break;
  }
};

export default mouseDown;
