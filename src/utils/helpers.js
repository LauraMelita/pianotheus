export const generateNumber = (min, max) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};

export const currentYear = new Date().getFullYear();

export const isValueSafe = (value) => !/<(?:.|\n)*?>/gm.test(value);

export const splitArray = (array, number) => {
  const length = array.length;
  const size = Math.ceil(length / number); // Determine the size of each group

  const groups = [];

  // Split the array into smaller groups
  for (let i = 0; i < length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
};
