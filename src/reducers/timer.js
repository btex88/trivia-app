const INIT = { sec: '30' };
const COUNTDOWN = 'COUNTDOWN';
const TIMER_RESET = 'TIMER_RESET';

const setTime = (sec) => ((Number(sec) > 0) ? Number(sec) - 1 : '0');

const timer = (state = INIT, { type, payload }) => {
  if (type === COUNTDOWN) return { sec: setTime(payload) };
  if (type === TIMER_RESET) return INIT;
  return state;
};

export default timer;
