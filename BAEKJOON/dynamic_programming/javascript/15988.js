/*
  15988: 1, 2, 3 더하기 3/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map(Number);
input.shift();

const dp = [0, 1, 2, 4];
for (let i = 4; i <= Math.max(...input); i++) {
  dp.push((dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009);
}

const result = [];
for (let value of input) {
  result.push(dp[value]);
}

console.log(result.join('\n'));