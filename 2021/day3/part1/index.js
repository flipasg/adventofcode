import { INPUT } from '../constants';

export const getPowerConsumption = (input) => {
  const listOfBinaries = input.map((binString) => binString.split(''));
  const gammaRate = [];
  const epsilonRate = [];
  for (let i = 0; i < listOfBinaries[0].length; i++) {
    const tempBinary = [];
    for (let j = 0; j < listOfBinaries.length; j++) {
      tempBinary.push(+listOfBinaries[j][i]);
    }

    const hasMore1Bits =
      tempBinary.reduce((accumulator, curr) => accumulator + curr) >=
      listOfBinaries.length / 2;

    gammaRate.push(hasMore1Bits ? 1 : 0);
    epsilonRate.push(hasMore1Bits ? 0 : 1);
  }
  return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2);
};

console.log('day3 :: part1 :: final result -> ', getPowerConsumption(INPUT));
