
import { TEST_INPUT } from '../constants';
import { countGroupedMeasures } from './index';

describe('day 1 :: part 2 :: countGroupedMeasures', () => {

  it('countGroupedMeasures :: should count increased measures  (grouped by 3)', () => {
    expect(countGroupedMeasures(TEST_INPUT)).toBe(5);
  });
});
