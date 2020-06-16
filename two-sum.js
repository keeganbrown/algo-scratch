const assert = require('assert');

var twoSum = function (nums = [], target = 0) {
  const length = nums.length;
  let output = [];

  nums.forEach((item1, index1) => {
    if (output.length) {
      return;
    }
    for (let index2 = index1; index2 < length; index2++) {
      const item2 = nums[index2];
      if (output.length || index2 <= index1) {
        continue;
      }
      if (item1 + item2 === target) {
        output = [index1, index2];
        return;
      }
    }
  });

  return output;
};

assert(twoSum([2, 7, 11, 15], 9).join(',') === '0,1');
assert(twoSum([11, 7, 2, 15], 9).join(',') === '1,2');
assert(twoSum([15, 7, 11, 2, 0, 100, -99], 1).join(',') === '5,6');
assert(twoSum([3, 3], 6).join(',') === '0,1');
assert(twoSum([3, 2, 4], 6).join(',') === '1,2');
assert(
  twoSum(
    [
      230,
      863,
      916,
      585,
      981,
      404,
      316,
      785,
      88,
      12,
      70,
      435,
      384,
      778,
      887,
      755,
      740,
      337,
      86,
      92,
      325,
      422,
      815,
      650,
      920,
      125,
      277,
      336,
      221,
      847,
      168,
      23,
      677,
      61,
      400,
      136,
      874,
      363,
      394,
      199,
      863,
      997,
      794,
      587,
      124,
      321,
      212,
      957,
      764,
      173,
      314,
      422,
      927,
      783,
      930,
      282,
      306,
      506,
      44,
      926,
      691,
      568,
      68,
      730,
      933,
      737,
      531,
      180,
      414,
      751,
      28,
      546,
      60,
      371,
      493,
      370,
      527,
      387,
      43,
      541,
      13,
      457,
      328,
      227,
      652,
      365,
      430,
      803,
      59,
      858,
      538,
      427,
      583,
      368,
      375,
      173,
      809,
      896,
      370,
      789
    ],
    542
  ).join(',') === '28,45'
);
