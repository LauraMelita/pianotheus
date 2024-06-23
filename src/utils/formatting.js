// ============================================================
// STRINGS
// ============================================================

export const convertToPath = (str) =>
  str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '');

export const removeAccents = (str) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const stringIncludesWord = (str, word) =>
  new RegExp('\\b' + word + '\\b', 'i').test(str);

export const capitalize = (str) => {
  return str.replace(str[0], str[0].toUpperCase());
};

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-') // Replace all white spaces with dashes
    .replace(/[^\w-]+/g, ''); // Remove all special characters
};

// ============================================================
// TIME
// ============================================================

export const formatTime = (time) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

export const convertMinutesToHoursAndMinutes = (minutes) => {
  // Calculate the number of hours
  const hours = Math.floor(minutes / 60);

  // Calculate the remaining minutes after subtracting the hours
  const remainingMinutes = minutes % 60;

  // Return an object containing hours and remaining minutes
  return { hours, minutes: remainingMinutes };
};

// ============================================================
// DATES
// ============================================================

export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};

// ============================================================
// FILES
// ============================================================

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

export const formatFileName = (title) => {
  return title
    .toLowerCase()
    .replace(/,/g, '') // Remove commas
    .replace(/\.|:/g, '') // Remove periods and colons
    .replace(/[\s]+/g, '_') // Replace spaces with underscores
    .replace(/[()]/g, ''); // Remove parentheses
};

// ============================================================
// STYLES
// ============================================================

// Fetches the value of a CSS variable from the :root scope
export const getCSSVariableValue = (CSSVariable) => {
  const root = document.documentElement;
  const style = getComputedStyle(root);

  return style.getPropertyValue(CSSVariable);
};

// Parses a pixel value to a number
export const parsePixelValue = (pixelValue) => +pixelValue.replace('px', '');

// Extracts the name of a CSS variable from var(--variableName) to --variableName
export const extractVariableName = (CSSVariable) => {
  if (
    typeof CSSVariable === 'string' &&
    CSSVariable.startsWith('var(') &&
    CSSVariable.endsWith(')')
  ) {
    // Extract the variable name inside 'var()'
    return CSSVariable.slice(4, -1).trim();
  }
  // Return the original string if it doesn't match 'var(--variable-name)' format
  return CSSVariable;
};

export const parseCSSVariableToNumber = (CSSVariable) => {
  const variable = extractVariableName(CSSVariable);
  const value = getCSSVariableValue(variable);
  const valueNumber = parsePixelValue(value);

  return valueNumber;
};

// ============================================================
// COLORS
// ============================================================

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
