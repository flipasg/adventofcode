## --- Part Two ---

Next, you should verify the _life support rating_, which can be determined by multiplying the _oxygen generator rating_ by the _CO2 scrubber rating_.

Both the oxygen generator rating and the CO2 scrubber rating are values that can be found in your diagnostic report - finding them is the tricky part. Both values are located using a similar process that involves filtering out values until only one remains. Before searching for either rating value, start with the full list of binary numbers from your diagnostic report and _consider just the first bit_ of those numbers. Then:

*   Keep only numbers selected by the _bit criteria_ for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria.
*   If you only have one number left, stop; this is the rating value for which you are searching.
*   Otherwise, repeat the process, considering the next bit to the right.

The _bit criteria_ depends on which type of rating value you want to find:

*   To find _oxygen generator rating_, determine the _most common_ value (`0` or `1`) in the current bit position, and keep only numbers with that bit in that position. If `0` and `1` are equally common, keep values with a `_1_` in the position being considered.
*   To find _CO2 scrubber rating_, determine the _least common_ value (`0` or `1`) in the current bit position, and keep only numbers with that bit in that position. If `0` and `1` are equally common, keep values with a `_0_` in the position being considered.

For example, to determine the _oxygen generator rating_ value using the same example diagnostic report from above:

*   Start with all 12 numbers and consider only the first bit of each number. There are more `1` bits (7) than `0` bits (5), so keep only the 7 numbers with a `1` in the first position: `11110`, `10110`, `10111`, `10101`, `11100`, `10000`, and `11001`.
*   Then, consider the second bit of the 7 remaining numbers: there are more `0` bits (4) than `1` bits (3), so keep only the 4 numbers with a `0` in the second position: `10110`, `10111`, `10101`, and `10000`.
*   In the third position, three of the four numbers have a `1`, so keep those three: `10110`, `10111`, and `10101`.
*   In the fourth position, two of the three numbers have a `1`, so keep those two: `10110` and `10111`.
*   In the fifth position, there are an equal number of `0` bits and `1` bits (one each). So, to find the _oxygen generator rating_, keep the number with a `1` in that position: `10111`.
*   As there is only one number left, stop; the _oxygen generator rating_ is `10111`, or `_23_` in decimal.

Then, to determine the _CO2 scrubber rating_ value from the same example above:

*   Start again with all 12 numbers and consider only the first bit of each number. There are fewer `0` bits (5) than `1` bits (7), so keep only the 5 numbers with a `0` in the first position: `00100`, `01111`, `00111`, `00010`, and `01010`.
*   Then, consider the second bit of the 5 remaining numbers: there are fewer `1` bits (2) than `0` bits (3), so keep only the 2 numbers with a `1` in the second position: `01111` and `01010`.
*   In the third position, there are an equal number of `0` bits and `1` bits (one each). So, to find the _CO2 scrubber rating_, keep the number with a `0` in that position: `01010`.
*   As there is only one number left, stop; the _CO2 scrubber rating_ is `01010`, or `_10_` in decimal.

Finally, to find the life support rating, multiply the oxygen generator rating (`23`) by the CO2 scrubber rating (`10`) to get `_230_`.

Use the binary numbers in your diagnostic report to calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together. _What is the life support rating of the submarine?_ (Be sure to represent your answer in decimal, not binary.)