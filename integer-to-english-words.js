/**
 * @param {number} num
 * @return {string}
 */

const numToEnglish = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
};

const decas = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety'
};

const decaLengthIndexes = [11, 8, 5, 2]; // 10_010_010_010
const hundredLengthIndexes = [12, 9, 6, 3]; // 10_010_010_010

const magnitude = {
  4: `Thousand`,
  7: `Million`,
  10: `Billion`
};

const maybeHundred = (targetNum, lengthRemaining, indexMod) => {
  if (typeof targetNum === 'undefined') {
    return '';
  }
  if (hundredLengthIndexes.includes(lengthRemaining - indexMod)) {
    return `${targetNum} Hundred`;
  }
  return `${targetNum}`;
};

const getTargetNum = (num, numNext, lengthRemaining) => {
  let targetNumEnglish = numToEnglish[num];
  let numNextTwo = parseInt(`${num}${numNext}`, 10);
  let indexMod = 0;

  if (numNextTwo < 20 && decaLengthIndexes.includes(lengthRemaining)) {
    targetNumEnglish = numToEnglish[numNextTwo];
    indexMod = 1;
  }
  if (numNextTwo >= 20 && decaLengthIndexes.includes(lengthRemaining)) {
    targetNumEnglish =
      `${decas[num]}` +
      (numToEnglish[numNext] ? ` ${numToEnglish[numNext]}` : '');
    indexMod = 1;
  }

  return [targetNumEnglish, indexMod];
};

var numberToWords = function (num) {
  if (num === 0) {
    return 'Zero';
  }

  var strNum = `${num}`;
  var words = [];
  var magnitudeValues = Object.values(magnitude);

  for (let index = 0; index < strNum.length; index++) {
    const num = parseInt(strNum[index], 10);
    const numNext =
      index < strNum.length - 1 ? parseInt(strNum[index + 1], 10) : 0;
    const lengthRemaining = strNum.length - index;
    const [targetNum, indexMod] = getTargetNum(num, numNext, lengthRemaining);

    // console.log({ lengthRemaining, num, numNext });

    index += indexMod;

    if (targetNum) {
      words.push(maybeHundred(targetNum, lengthRemaining, indexMod));
    }
    if (
      magnitude[lengthRemaining - indexMod] &&
      !magnitudeValues.includes(words[words.length - 1])
    ) {
      words.push(magnitude[lengthRemaining - indexMod]);
    }
  }

  // console.log(num);
  return words.join(' ');
};

console.log(numberToWords(0));
console.log(numberToWords(20));
console.log(numberToWords(200));
console.log(numberToWords(2000));
console.log(numberToWords(20000));
console.log(numberToWords(123));
console.log(numberToWords(12012));
console.log(numberToWords(12316));
console.log(numberToWords(123016));
console.log(numberToWords(1234567));
console.log(numberToWords(1234567891)); // 1_234_567_891
console.log(numberToWords(9000900900)); // 9_000_900_900
console.log(numberToWords(900900900)); // 900_900_900
console.log(numberToWords(1000000011)); // 1_000_000_011
