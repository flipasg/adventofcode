import { INPUT } from '../constants';

const chunkMeasures = (measures, chunkSize) =>
  measures.reduce((curr, next, index, list) => {
    if (index < chunkSize) {
      curr[0] = [].concat(curr[0] || [], next);
    } else {
      curr[curr.length] = curr[curr.length - 1].slice(1).concat(next);
    }
    return curr;
  }, []);

const countIncreasedMeasures = (measures) =>
  measures.reduce(
    (curr, next, index, list) =>
      index > 0 && next > list[index - 1] ? curr + 1 : curr,
    0
  );

export const countGroupedMeasures = (measures) =>
  countIncreasedMeasures(
    chunkMeasures(measures, 3).map((measureChunk) =>
      measureChunk.reduce((curr, next) => curr + next)
    )
  );

console.log('day1 :: part2 :: final result -> ', countGroupedMeasures(INPUT));
