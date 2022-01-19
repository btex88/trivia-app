const URL = {
  categories: 'https://opentdb.com/api_category.php',
  token: 'https://opentdb.com/api_token.php?command=request',
  questions: (token, diff, cat, type) => (
    `https://opentdb.com/api.php?amount=5&token=${token}&difficulty=${diff}&category=${cat}&type=${type}`),
};

export const fetchToken = () => fetch(URL.token)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export const fetchCategories = () => fetch(URL.categories)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export const fetchQuestions = (token, diff = '', cat = '', type = '') => (
  fetch(URL.questions(token, diff, cat, type))
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error));
