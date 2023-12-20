export const convertToPath = (str) =>
  str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '');

export const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const stringIncludesWord = (str, word) =>
  new RegExp('\\b' + word + '\\b', 'i').test(str);
