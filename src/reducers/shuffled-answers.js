const INIT = [];
const ADD_SHUFFLED = 'ADD_SHUFFLED';
const SHUFFLED_RESET = 'SHUFFLED_RESET';

const shuffledAnswers = (state = INIT, action) => {
  if (action.type === ADD_SHUFFLED) return action.payload;
  if (action.type === SHUFFLED_RESET) return INIT;
  return state;
};

export default shuffledAnswers;
