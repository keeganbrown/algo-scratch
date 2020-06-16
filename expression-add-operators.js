/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  var collection = [];
  var operators = ['*', '+', '-', ''];
  var iterate = true;
  var numIndex = 0;

  var updateRunningTotal = (
    operandA,
    previousOperator,
    operator,
    operandB,
    runningTotal
  ) => {
    const numLastOperand = !operandA ? 0 : parseInt(operandA);
    const numCurrentOperand = !operandB ? 0 : parseInt(operandB);

    if (operator === '*') {
      if (previousOperator === '') {
        return numCurrentOperand;
      }
      if (previousOperator === '*') {
        return runningTotal * numCurrentOperand;
      }
      let adjustedRunningTotal = runningTotal;
      if (previousOperator === '+') {
        adjustedRunningTotal -= numLastOperand;
      }
      if (previousOperator === '-') {
        adjustedRunningTotal += numLastOperand;
      }
      const newValue = numLastOperand * numCurrentOperand;
      return adjustedRunningTotal + newValue;
    }
    if (operator === '+') {
      return runningTotal + numCurrentOperand;
    }
    if (operator === '-') {
      return runningTotal - numCurrentOperand;
    }

    return runningTotal;
  };

  var iterateNext = function (
    numIndex,
    outputStr,
    cb,
    currentOperand = '',
    lastOperand = '',
    lastOperator = '',
    runningTotal = 0,
    operations = 0
  ) {
    let nextLastOperand = lastOperand;
    let nextRunningTotal = runningTotal;

    if (numIndex <= num.length) {
      let opIndex = 0;

      while (opIndex < operators.length) {
        let operator = operators[opIndex];
        if (
          operator === '' &&
          outputStr[outputStr.length - 1] === '0' &&
          (operators.includes(outputStr[outputStr.length - 2]) ||
            outputStr.length - 2 < 0)
        ) {
          // exit if invalid output str
          console.error({ outputStr });
          return;
        }

        const newOutputStr = num[numIndex]
          ? outputStr + operator + num[numIndex]
          : outputStr;
        let nextCurrOperand = currentOperand;

        if (operator === '' && num[numIndex]) {
          nextCurrOperand = currentOperand + `${num[numIndex]}`;
        }

        if (operator !== '') {
          nextRunningTotal = updateRunningTotal(
            nextLastOperand,
            lastOperator,
            operator,
            nextCurrOperand,
            nextRunningTotal
          );

          operations += 1;

          console.log({
            newOutputStr,
            nextLastOperand,
            lastOperator,
            operator,
            nextCurrOperand,
            nextRunningTotal
          });

          nextLastOperand = nextCurrOperand;
          nextCurrOperand = num[numIndex] ? num[numIndex] : '';
        }
        opIndex++;

        iterateNext(
          numIndex + 1,
          newOutputStr,
          cb,
          nextCurrOperand,
          nextLastOperand,
          operator ? operator : lastOperator,
          nextRunningTotal,
          operations
        );
      }
    } else {
      nextRunningTotal = updateRunningTotal(
        nextLastOperand,
        lastOperator,
        operator,
        nextCurrOperand,
        nextRunningTotal
      );
      cb(nextRunningTotal, outputStr);
    }
  };

  iterateNext(
    numIndex + 1,
    num[0],
    (finalTotal, outputStr) => {
      if (finalTotal === target) {
        collection.push(outputStr);
      }
    },
    num[0]
  );

  return collection;
};

console.log(addOperators('1234', 6));

// 12-3

/*
1234
1+2 == 3
3+3 == 6
(6-3)+3*4 == 15

123
1+2 == 3
(3-2)+(2*3) == 7
1+2*3 == 7

123
1-2 == -2
(-2+2)+(2*3) == 6
1-2*3 == 5




*/
