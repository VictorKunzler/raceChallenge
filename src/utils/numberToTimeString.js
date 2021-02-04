const numberToTimeString = (number) => {
  const seconds = ((number / 1000) % 60).toFixed(3);
  const minutes = Math.trunc(number / 60000) % 60;

  return `${minutes}:${seconds}`;
};

export default numberToTimeString;
