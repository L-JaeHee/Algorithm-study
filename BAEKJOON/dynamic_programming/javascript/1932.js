/*
  1932: 정수 삼각형/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input.map((x) => x.split(' ').map(Number));
input.unshift(0);

for (let i = N - 1; i >= 1; i--) {
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] += Math.max(input[i + 1][j], input[i + 1][j + 1]);
  }
}

console.log(input[1][0]);