const INIT = 0;
const INDEX_INCREMENT = 'INDEX_INCREMENT';
const INDEX_RESET = 'INDEX_RESET';

const indexCount = (state = INIT, action) => {
  if (action.type === INDEX_INCREMENT) return state + 1;
  if (action.type === INDEX_RESET) return INIT;
  return state;
};

export default indexCount;
