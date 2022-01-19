const local = {
  token: (value) => localStorage.setItem('token', JSON.stringify(value)),
  ranking: (value) => localStorage.setItem('ranking', JSON.stringify(value)),
  get: {
    token: () => JSON.parse(localStorage.getItem('token')),
    ranking: () => JSON.parse(localStorage.getItem('ranking')),
  },
};

export default local;
