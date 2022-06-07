import charProperties from '../taskOne';

const character = {
  name: 'Ivan',
  health: 10,
  level: 1,
  attack: 80,
  defence: 40,
};

const resultObjectArray = [
  { key: 'name', value: 'Ivan' },
  { key: 'level', value: 1 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('test charProperties function', () => {
  expect(charProperties(character, ['name', 'level'])).toEqual(resultObjectArray);
});
