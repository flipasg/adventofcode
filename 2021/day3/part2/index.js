import { INPUT } from '../constants';

export const getLifeSupportRating = (input) => {
  const listOfBinaries = input.map((binString) => binString.split(''));

  let oxigenBinaries = listOfBinaries.slice(0);
  let co2Binaries = listOfBinaries.slice(0);
  for (let i = 0; i < listOfBinaries[0].length; i++) {
    if (oxigenBinaries.length > 1) {
      let sumOfOxigenBinaries = 0;
      for (let j = 0; j < oxigenBinaries.length; j++) {
        sumOfOxigenBinaries += +oxigenBinaries[j][i];
      }
      const hasO21Bits = sumOfOxigenBinaries >= oxigenBinaries.length / 2;
      oxigenBinaries = oxigenBinaries.filter(
        (binary) => binary[i] === (hasO21Bits ? '1' : '0')
      );
    }

    if (co2Binaries.length > 1) {
      let sumOfCO2Binaries = 0;
      for (let j = 0; j < co2Binaries.length; j++) {
        sumOfCO2Binaries += +co2Binaries[j][i];
      }
      const hasCO21Bits = sumOfCO2Binaries >= co2Binaries.length / 2;
      co2Binaries = co2Binaries.filter(
        (binary) => binary[i] === (hasCO21Bits ? '0' : '1')
      );
    }
  }
  return (
    parseInt(oxigenBinaries[0].join(''), 2) *
    parseInt(co2Binaries[0].join(''), 2)
  );
};

console.log('day3 :: part2 :: final result -> ', getLifeSupportRating(INPUT));
