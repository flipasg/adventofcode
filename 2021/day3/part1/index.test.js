import { TEST_INPUT } from '../constants';
import { getPowerConsumption } from './index';

describe('day 3 :: part 1 :: getPowerConsumption', () => {
  it('getPowerConsumption :: should calc the power consumption of the submarine', () => {
    expect(getPowerConsumption(TEST_INPUT)).toBe(198);
  });
});