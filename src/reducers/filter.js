const INIT = {
  cat: '',
  diff: '',
  type: '',
};

const ADD_FILTER = 'ADD_FILTER';

const filter = (state = INIT, action) => {
  if (action.type === ADD_FILTER) return { ...state, ...action.payload };
  return state;
};

export default filter;
