function binarySearch(target, sortedArray, start = -1, end = -1) {
  if (start < 0) {
    start = 0;
  }
  if (end < 0) {
    end = sortedArray.length;
  }
  let halfDist = sortedArray.length;
  let centerIndex = 0;
  let center = 0;

  while (halfDist > 1) {
    halfDist = Math.round((end - start) / 2);
    centerIndex = start + halfDist;
    center = sortedArray[centerIndex];

    if (target === center) {
      return centerIndex;
    }
    if (target < center) {
      end = start + halfDist;
    }
    if (target > center) {
      start = start + halfDist;
    }
  }

  return -1;
}

// TEST:
function test() {
  const testArray = (len) => {
    return new Array(len).fill(1).map((_, i) => i);
  };

  console.assert(binarySearch(10, testArray(100)) == 10, 'Should be index 10');
  console.assert(binarySearch(999, testArray(100)) == -1, 'Should be index -1');
  console.assert(
    binarySearch(10, testArray(10000000)) === 10,
    'Should be index 10'
  );
  console.assert(
    binarySearch(999998, testArray(10000000)) === 999998,
    'Should be index 999998'
  );
}

test();
