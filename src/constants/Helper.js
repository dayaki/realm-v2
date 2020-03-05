export const API_URL = 'https://realm-glory.herokuapp.com/api/';

export const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];

const pad = (n, width, z = 0) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

export const secondsToMinutes = seconds =>
  Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);
