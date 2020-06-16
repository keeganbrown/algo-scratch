function balancedParens(n) {
  if (n === 0) {
    return [""];
  }
  let outputArray = [];

  permute(n, n, n, [], (resultArray) => {
    outputArray.push(resultArray.join(""));
  });

  return outputArray;
}

function permute(
  opensRemaining,
  closesRemaining,
  totalSets,
  collector,
  resultFN,
  direction = 0
) {
  if (collector.length === totalSets * 2 - 1) {
    collector.push(")");
    closesRemaining--;
  }
  if (collector.length === 0) {
    collector.push("(");
    opensRemaining--;
  }
  if (
    direction > 0 &&
    opensRemaining > 0 &&
    collector.length < totalSets * 2 - 1
  ) {
    collector.push("(");
    opensRemaining--;
  }
  if (
    direction < 0 &&
    closesRemaining > 0 &&
    collector.length < totalSets * 2 - 1
  ) {
    collector.push(")");
    closesRemaining--;
  }

  if (collector.length >= totalSets * 2) {
    return resultFN(collector);
  }

  if (opensRemaining > 0) {
    permute(
      opensRemaining,
      closesRemaining,
      totalSets,
      [...collector],
      resultFN,
      1
    );
  }

  if (closesRemaining > 0 && closesRemaining > opensRemaining) {
    permute(
      opensRemaining,
      closesRemaining,
      totalSets,
      [...collector],
      resultFN,
      -1
    );
  }
}

/*
(()(()))
(
- ()
  - ()(
    - ()()
    - ()(( 
- ((
  - (()
    - (())
  - (((

*/

console.log(balancedParens(4).sort());
