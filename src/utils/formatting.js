export const convertToPath = (str) =>
  str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '');

export const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const stringIncludesWord = (str, word) =>
  new RegExp('\\b' + word + '\\b', 'i').test(str);

export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};
