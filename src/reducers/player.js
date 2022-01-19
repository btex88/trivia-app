const INIT = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const ADD_SCORE = 'ADD_SCORE';
const ADD_PALYER = 'ADD_PALYER';
const RESET_SCORE = 'RESET_SCORE';

const player = (state = INIT, { type, payload }) => {
  if (type === ADD_PALYER) return { ...state, ...payload };
  if (type === ADD_SCORE) {
    return {
      ...state,
      score: Number(state.score) + Number(payload),
      assertions: Number(state.assertions) + 1,
    };
  }
  if (type === RESET_SCORE) return INIT;
  return state;
};

export default player;
