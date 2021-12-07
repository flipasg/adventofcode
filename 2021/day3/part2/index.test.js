import { TEST_INPUT } from '../constants';
import { getLifeSupportRating } from './index';

describe('day 3 :: part 2 :: getLifeSupportRating', () => {
  it('getLifeSupportRating :: should calc the life support rating (oxygen generator rating * CO2 scrubber rating)', () => {
    expect(getLifeSupportRating(TEST_INPUT)).toBe(230);
  });
});
