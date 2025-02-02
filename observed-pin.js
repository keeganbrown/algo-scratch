const adjacentMap = {
  '0': [0, 8],
  '1': [1, 4],
  '2': [1, 2, 3, 5],
  '3': [2, 3, 6],
  '4': [1, 4, 5, 7],
  '5': [2, 4, 5, 6, 8],
  '6': [3, 5, 6, 9],
  '7': [4, 7, 8],
  '8': [5, 7, 8, 9, 0],
  '9': [6, 8, 9],
};

function permutePins(optionsGroups, handler) {
  const permuter = (startIndex) => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
  };

  permuter([]);
}

function getPINs(observed) {
  const length = observed.length;
  const optionsGroups = observed.split('').map((acc, item) => {
    return [...adjacentMap[item]];
  });

  let optionsPermutations = [];
  permutePins(optionsGroups, (permutation) => {
    console.log({ permutation });
  });

  return optionsPermutations;
}

var expectations = {
  '8': ['5', '7', '8', '9', '0'],
  '11': ['11', '22', '44', '12', '21', '14', '41', '24', '42'],
  '369': [
    '339',
    '366',
    '399',
    '658',
    '636',
    '258',
    '268',
    '669',
    '668',
    '266',
    '369',
    '398',
    '256',
    '296',
    '259',
    '368',
    '638',
    '396',
    '238',
    '356',
    '659',
    '639',
    '666',
    '359',
    '336',
    '299',
    '338',
    '696',
    '269',
    '358',
    '656',
    '698',
    '699',
    '298',
    '236',
    '239',
  ],
};

for (var pin in expectations) {
  console.log(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
}
