export const convertToPath = (str) =>
  str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '');

export const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const stringIncludesWord = (str, word) =>
  new RegExp('\\b' + word + '\\b', 'i').test(str);

export const capitalize = (str) => {
  return str.replace(str[0], str[0].toUpperCase());
};

export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};

export const convertHexToRGB = (hexColor) =>
  hexColor
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

export const extractRgbValues = (rgbColor) =>
  rgbColor
    .replace(/[^\d,]/g, '')
    .split(',')
    .join(', ');

export const bytesToMegabytes = (bytes) => bytes / (1024 * 1024);

export const formatList = (arr) => {
  const listFormatter = new Intl.ListFormat('en-us');
  return listFormatter.format(arr);
};

export const fileExtensionsList = (fileTypes) => {
  const fileExtensions = fileTypes.map((fileType) =>
    fileType.replace('image/', '.')
  );

  return formatList(fileExtensions);
};

export const getRootStyleValue = (variable) => {
  const root = document.documentElement;
  const style = getComputedStyle(root);

  return style.getPropertyValue(variable);
};

export const parsePxToNumber = (value) => +value.replace('px', '');

export const formatTime = (time) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

export const formatFileName = (title) => {
  return title
    .toLowerCase()
    .replace(/,/g, '') // Remove commas
    .replace(/\.|:/g, '') // Remove periods and colons
    .replace(/[\s]+/g, '_') // Replace spaces with underscores
    .replace(/[\(\)]/g, ''); // Remove parentheses
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-') // Replace all white spaces with dashes
    .replace(/[^\w-]+/g, ''); // Remove all special characters
};
