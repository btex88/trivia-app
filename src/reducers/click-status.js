const INIT = false;
const CLICK_BUTTON = 'CLICK_BUTTON';
const CLICK_RESET = 'CLICK_RESET';

const clickStatus = (state = INIT, action) => {
  if (action.type === CLICK_BUTTON) return true;
  if (action.type === CLICK_RESET) return INIT;
  return state;
};

export default clickStatus;
