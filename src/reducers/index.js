import { combineReducers } from 'redux';

import categories from './categories';
import clickStatus from './click-status';
import filter from './filter';
import indexCount from './index-count';
import player from './player';
import questions from './questions';
import shuffledAnswers from './shuffled-answers';
import timer from './timer';
import token from './token';

const rootReducer = combineReducers({
  categories,
  clickStatus,
  filter,
  indexCount,
  player,
  questions,
  shuffledAnswers,
  timer,
  token,
});

export default rootReducer;
