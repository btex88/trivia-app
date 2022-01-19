const INIT = '';
const FETCH_TOKEN = 'FETCH_TOKEN';
const TOKEN_ERROR = 'TOKEN_ERROR';

const token = (state = INIT, action) => {
  if (action.type === FETCH_TOKEN) return action.payload.token;
  if (action.type === TOKEN_ERROR) return action.payload;
  return state;
};

export default token;
