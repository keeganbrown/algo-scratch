/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  const SKIP = ' ';
  const PSIGN = '+';
  const NSIGN = '-';
  const ALLOWED = '0123456789'.split('');
  let numValue = 0;
  let dir = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charNum = ALLOWED.indexOf(char);

    if (charNum < 0 && char !== SKIP && char !== PSIGN && char !== NSIGN) {
      return numValue;
    }
    if (dir !== 0 && (char === PSIGN || char === NSIGN)) {
      return numValue;
    }
    if (dir === 0 && char === SKIP) {
      continue;
    }
    if (dir !== 0 && charNum < 0) {
      return numValue;
    }
    if (dir !== 0 && charNum < 0) {
      return numValue;
    }

    if (dir === 0 && char === NSIGN) {
      dir = -1;
    }

    if (dir === 0 && (char === PSIGN || charNum > -1)) {
      dir = 1;
    }

    if (charNum > -1) {
      numValue *= 10;
      numValue += charNum * dir;
    }

    if (numValue > MAX) {
      return MAX;
    }
    if (numValue < MIN) {
      return MIN;
    }
  }

  return numValue;
};

console.log(myAtoi('42'));
console.log(myAtoi('    -42'));
console.log(myAtoi('    +-42'));
console.log(myAtoi('   +0 123'));
console.log(myAtoi('asdfasd 3242'));
console.log(myAtoi('  +232 1 sdfsd'));
console.log(myAtoi('  -91283472332  sdf'));
