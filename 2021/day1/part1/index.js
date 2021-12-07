import { INPUT } from '../constants';

export const countIncreasedMeasures = (measures) =>
  measures.reduce(
    (curr, next, index, list) =>
      index > 0 && next > list[index - 1] ? curr + 1 : curr,
    0
  );

console.log('day1 :: part1 :: final result -> ', countIncreasedMeasures(INPUT));
