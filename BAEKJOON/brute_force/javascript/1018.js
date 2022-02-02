/*
  1018: 체스판 다시 칠하기/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map((x) => +x);
const result = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    const board = [];
    board.push(input[i].slice(j, j + 8));
    board.push(input[i + 1].slice(j, j + 8));
    board.push(input[i + 2].slice(j, j + 8));
    board.push(input[i + 3].slice(j, j + 8));
    board.push(input[i + 4].slice(j, j + 8));
    board.push(input[i + 5].slice(j, j + 8));
    board.push(input[i + 6].slice(j, j + 8));
    board.push(input[i + 7].slice(j, j + 8));
    result.push(checker(board));
  }
}

console.log(Math.min(...result));

function checker(board) {
  const total = [];
  const colors = ['W', 'B'];
  for (let color of colors) {
    let currentColor = color;
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j] !== currentColor) {
          cnt++;
        }
        currentColor = currentColor === 'W' ? 'B' : 'W';
      }
      currentColor = currentColor === 'W' ? 'B' : 'W';
    }
    total.push(cnt);
  }
  return Math.min(...total);
}