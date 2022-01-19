const INIT = {};
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const QUESTIONS_ERROR = 'QUESTIONS_ERROR';
const QUESTIONS_RESET = 'QUESTIONS_RESET';

const questions = (state = INIT, { type, payload }) => {
  if (type === FETCH_QUESTIONS) return payload;
  if (type === QUESTIONS_ERROR) return payload;
  if (type === QUESTIONS_RESET) return INIT;
  return state;
};

export default questions;
