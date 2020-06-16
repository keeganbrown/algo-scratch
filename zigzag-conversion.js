// p       h
// a     s i
// y   i   r
// p l     i g
// a       n

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const strArr = s.split('');
  const gapLength = numRows - 2;
  const blankGrid = new Array(numRows).fill(0).map(() => {
    return [];
  });

  let rowCursor = 0;
  let colCursor = 0;
  let gapCount = 0;
  let gapColCount = 0;
  let solidCount = numRows;

  let incrementCursors = (length) => {
    rowCursor++;
    if (rowCursor > length - 1) {
      rowCursor = 0;
      colCursor++;
    }

    if (solidCount <= 0) {
      gapCount = gapLength;
      gapColCount = gapLength + 1;
    }
  };

  const strGrid = strArr.reduce((acc, item, index) => {
    console.log({ item, rowCursor, gapColCount });

    while (gapCount > 0) {
      solidCount = numRows;
      acc[rowCursor].push('');
      gapCount--;
      incrementCursors(numRows);
    }

    acc[rowCursor].push(item);
    solidCount--;

    incrementCursors(numRows);

    if (gapColCount > 0) {
      gapCount = gapLength;
      gapColCount--;
    }
    return acc;
  }, blankGrid);

  // return strGrid;
  //return strGrid.map((row) => row.join(' ')).join('\n');
  return strGrid.map((row) => row.join('')).join('');
};

console.log(convert('PAYPALISHIRING', 3));
