
import { INPUT } from '../constants';
import { moveSubmarine } from '../part1/index';

export const MAPPING = {
  forward: ({ x, y, aim }, quantity) => ({
    x: x + quantity,
    y: y + quantity * aim,
    aim,
  }),
  down: ({ x, y, aim }, quantity) => ({
    x,
    y,
    aim: aim + quantity,
  }),
  up: ({ x, y, aim }, quantity) => ({
    x,
    y,
    aim: aim - quantity,
  }),
};

export const START_POINT = {
  x: 0,
  y: 0,
  aim: 0
};

export { moveSubmarine } from '../part1/index';

console.log('day2 :: part2 :: final result -> ', moveSubmarine(INPUT, MAPPING, START_POINT));