const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function checker(board, n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    let rowCount = 1;
    let colCount = 1;

    for (let j = 0; j < n - 1; j++) {
      // 행 체크
      if (board[i][j] === board[i][j + 1]) {
        rowCount++;
      } else {
        result = Math.max(result, rowCount);
        rowCount = 1;
      }

      // 열 체크
      if (board[j][i] === board[j + 1][i]) {
        colCount++;
      } else {
        result = Math.max(result, colCount);
        colCount = 1;
      }

      result = Math.max(result, rowCount, colCount);
    }
  }

  return result;
}

function swapRow(board, i, j) {
  const temp = board[i][j];
  board[i][j] = board[i][j + 1];
  board[i][j + 1] = temp;
}

function swapCol(board, i, j) {
  const temp = board[j][i];
  board[j][i] = board[j + 1][i];
  board[j + 1][i] = temp;
}

function solution(input) {
  let [n, ...board] = input.split("\n");
  let result = 0;
  n = Number(n);
  board = board.map((x) => x.split(""));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 행 다른 원소 체크
      if (board[i][j] !== board[i][j + 1]) {
        swapRow(board, i, j);
        result = Math.max(result, checker(board, n));
        swapRow(board, i, j);
      }

      // 열 다른 원소 체크
      if (board[j][i] !== board[j + 1][i]) {
        swapCol(board, i, j);
        result = Math.max(result, checker(board, n));
        swapCol(board, i, j);
      }
    }
  }

  return result;
}

console.log(solution(input));
