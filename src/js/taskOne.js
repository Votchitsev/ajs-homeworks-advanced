export default function charProperties(char, sort) {
  const nameOrderedArray = [];
  const alphabetOrderedArray = [];

  for (const key in char) {
    if (Object.prototype.hasOwnProperty.call(char, key)) {
      const prop = {
        key,
        value: char[key],
      };
      if (key === sort[0]) {
        nameOrderedArray.splice(0, 0, prop);
      } else if (key === sort[1]) {
        nameOrderedArray.splice(1, 0, prop);
      } else {
        alphabetOrderedArray.push(prop);
      }
    }
  }
  return nameOrderedArray.concat(alphabetOrderedArray.sort((a, b) => (a.key > b.key ? 1 : -1)));
}
