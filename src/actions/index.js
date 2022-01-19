import * as API from '../services/handle-api';

// Actions Types
const ADD_FILTER = 'ADD_FILTER';
const ADD_PALYER = 'ADD_PALYER';
const ADD_SCORE = 'ADD_SCORE';
const ADD_SHUFFLED = 'ADD_SHUFFLED';
const CATEGORIES_ERROR = 'CATEGORIES_ERROR';
const CLICK_BUTTON = 'CLICK_BUTTON';
const CLICK_RESET = 'CLICK_RESET';
const COUNTDOWN = 'COUNTDOWN';
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const FETCH_TOKEN = 'FETCH_TOKEN';
const INDEX_INCREMENT = 'INDEX_INCREMENT';
const INDEX_RESET = 'INDEX_RESET';
const QUESTIONS_ERROR = 'QUESTIONS_ERROR';
const QUESTIONS_RESET = 'QUESTIONS_RESET';
const RESET_SCORE = 'RESET_SCORE';
const SHUFFLED_RESET = 'SHUFFLED_RESET';
const TIMER_RESET = 'TIMER_RESET';
const TOKEN_ERROR = 'TOKEN_ERROR';

// Actions
export const addFilter = (payload) => ({ type: ADD_FILTER, payload });
export const addPlayer = (payload) => ({ type: ADD_PALYER, payload });
export const addScore = (payload) => ({ type: ADD_SCORE, payload });
export const addShuffled = (payload) => ({ type: ADD_SHUFFLED, payload });
export const clickButton = () => ({ type: CLICK_BUTTON });
export const clickReset = () => ({ type: CLICK_RESET });
export const countdown = (payload) => ({ type: COUNTDOWN, payload });
export const indexIncrement = () => ({ type: INDEX_INCREMENT });
export const indexReset = () => ({ type: INDEX_RESET });
export const questionsReset = () => ({ type: QUESTIONS_RESET });
export const resetScore = () => ({ type: RESET_SCORE });
export const shuffledReset = () => ({ type: SHUFFLED_RESET });
export const timerReset = () => ({ type: TIMER_RESET });

// Thunked Actions
export const fetchToken = () => (dispatch) => API.fetchToken()
  .then((payload) => dispatch({ type: FETCH_TOKEN, payload }))
  .catch((payload) => dispatch({ type: TOKEN_ERROR, payload }));

export const fetchQuestions = (token) => (dispatch) => API.fetchQuestions(token)
  .then((payload) => dispatch({ type: FETCH_QUESTIONS, payload }))
  .catch((payload) => dispatch({ type: QUESTIONS_ERROR, payload }));

export const fetchCategories = () => (dispatch) => API.fetchCategories()
  .then((payload) => dispatch({ type: FETCH_CATEGORIES, payload }))
  .catch((payload) => dispatch({ type: CATEGORIES_ERROR, payload }));
