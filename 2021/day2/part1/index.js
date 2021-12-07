import { INPUT } from '../constants';

export const MAPPING = {
  forward: ({ x, y }, quantity) => ({
    x: x + quantity,
    y,
  }),
  down: ({ x, y }, quantity) => ({
    x,
    y: y + quantity,
  }),
  up: ({ x, y }, quantity) => ({
    x,
    y: y - quantity,
  }),
};

export const START_POINT = {
  x: 0,
  y: 0,
};

const getSubmarinePositionNumber = ({ x, y }) => x * y;
export const moveSubmarine = (instructions, mapping, startPoint) =>
  getSubmarinePositionNumber(
    instructions
      .map((instruction) => instruction.split(' '))
      .reduce(
        (point, instruction) =>
        mapping[instruction[0]](point, +instruction[1]),
        startPoint
      )
  );

console.log('day2 :: part1 :: final result -> ', moveSubmarine(INPUT, MAPPING, START_POINT));
