/*
  1003: 피보나치 함수/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.shift();
input = input.map(Number);

const dp = [[1, 0], [0, 1]];
const result = [];

for (let i = 2; i <= Math.max(...input); i++) {
  dp.push([dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]]);
}

for (let n of input) {
  result.push(dp[n].join(' '));
}

console.log(result.join('\n'));