export default function charProperties(char, sortParam) {
  const keys = Object.keys(char);
  const nameOrderedKeys = keys.filter((key) => sortParam.includes(key));
  const alphabetOrderedKeys = keys.filter((key) => !sortParam.includes(key)).sort();
  return nameOrderedKeys.concat(alphabetOrderedKeys).map((key) => {
    const object = {
      key,
      value: char[key],
    };
    return object;
  });
}
