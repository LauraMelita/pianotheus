export const convertToPath = (str) =>
  str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '');

export const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const generateNumber = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};

export const stringIncludesWord = (str, word) =>
  new RegExp('\\b' + word + '\\b', 'i').test(str);

export const currentYear = new Date().getFullYear();
