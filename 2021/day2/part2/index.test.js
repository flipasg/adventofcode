import { TEST_INPUT } from '../constants';
import { moveSubmarine, MAPPING, START_POINT } from './index';

describe('day 2 :: part 2 :: moveSubmarine', () => {
  it('moveSubmarine :: should calc the product of the submarine x & y (with aim)', () => {
    expect(moveSubmarine(TEST_INPUT, MAPPING, START_POINT)).toBe(900);
  });
});
