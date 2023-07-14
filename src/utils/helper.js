export const convertToPath = (str) => str.toLowerCase().replaceAll(' ', '-');

export const generateNumber = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};
