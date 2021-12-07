
import { TEST_INPUT } from '../constants';
import { moveSubmarine, MAPPING, START_POINT } from './index';

describe('day 1 :: part 1 :: getSubmarinePositionNumber', () => {

  it('getSubmarinePositionNumber :: should calc the product of the submarine x & y', () => {
    expect(moveSubmarine(TEST_INPUT, MAPPING, START_POINT)).toBe(150);
  });
});