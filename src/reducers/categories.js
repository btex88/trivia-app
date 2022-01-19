const INIT = { list: [], selected: '' };
const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

const categories = (state = INIT, action) => {
  if (action.type === FETCH_CATEGORIES) {
    return {
      ...state,
      list: [...action.payload.trivia_categories],
    };
  }
  if (action.type === CATEGORIES_ERROR) return action.payload;
  return state;
};

export default categories;
