// https://www.codewars.com/kata/549ee8b47111a81214000941/train/javascript

function knight(start, finish) {
  // Ha-ha, it's not "knight", it's a horse :D
}

function getKnightMoves(square) {}

function chessBoard() {
  const rows = "abcdefgh".split("");
  const cols = "12345678".split("");
  return cols.map((col) => {
    return rows.map((row) => {
      return `${col}${row}`;
    });
  });
}

console.log(chessBoard());

let arr = [
  ["a1", "c1", 2],
  ["a1", "f1", 3],
  ["a1", "f3", 3],
  ["a1", "f4", 4],
  ["a1", "f7", 5],
];

// for (let i of arr) Test.assertEquals(knight(i[0], i[1]), i[2]);
