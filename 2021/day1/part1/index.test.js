
import { TEST_INPUT } from '../constants';
import { countIncreasedMeasures } from './index';

describe('day 1 :: part 1 :: countIncreasedMeasures', () => {

  it('countIncreasedMeasures :: should count increased measures', () => {
    expect(countIncreasedMeasures(TEST_INPUT)).toBe(7);
  });
});
