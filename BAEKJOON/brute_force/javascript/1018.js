const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function checkBoard(board) {
  const correctBoard = ["WBWBWBWB", "BWBWBWBW"];
  let result1 = 0;
  let result2 = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== correctBoard[i % 2][j]) result1++;
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] !== correctBoard[(i + 1) % 2][j]) result2++;
    }
  }

  return Math.min(result1, result2);
}

function solution(input) {
  const [NM, ...board] = input.split("\n");
  const [N, M] = NM.split(" ").map(Number);
  const result = [];

  for (let i = 0; i + 8 <= N; i++) {
    for (let j = 0; j + 8 <= M; j++) {
      const slicedBoard = [
        board[i].slice(j, j + 8),
        board[i + 1].slice(j, j + 8),
        board[i + 2].slice(j, j + 8),
        board[i + 3].slice(j, j + 8),
        board[i + 4].slice(j, j + 8),
        board[i + 5].slice(j, j + 8),
        board[i + 6].slice(j, j + 8),
        board[i + 7].slice(j, j + 8),
      ];

      result.push(checkBoard(slicedBoard));
    }
  }

  return Math.min(...result);
}

console.log(solution(input));
