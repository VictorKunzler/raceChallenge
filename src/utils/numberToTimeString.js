const numberToTimeString = (number) => {
  let seconds = ((number / 1000) % 60).toFixed(3);
  const minutes = Math.trunc(number / 60000) % 60;

  if (seconds.length < 6) seconds = '0' + seconds;
  return `${minutes}:${seconds}`;
};

export default numberToTimeString;
