import { sum, sub, gt } from '../src/calc'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 4 to equal 7', () => {
  expect(sum(3, 4)).toBe(7);
});

test('subs 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});

test('5 > 2 is true', () => {
  expect(gt(5, 2)).toBe(true);
});
