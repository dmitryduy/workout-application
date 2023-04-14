export const arrayToString = (array: Array<any>) => array.join(',');

export const stringToArray = (
  string: string,
  typeOfArray: 'string' | 'number',
) => {
  if (string.length && typeOfArray === 'string') {
    return string.split(',');
  }

  if (string.length && typeOfArray === 'number') {
    return string.split(',').map((str) => Number(str));
  }

  return [];
};
