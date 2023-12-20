export const generateNumber = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};

export const currentYear = new Date().getFullYear();
