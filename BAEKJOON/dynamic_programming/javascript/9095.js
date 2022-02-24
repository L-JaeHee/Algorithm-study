/*
  9095: 1, 2, 3 더하기/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => +x);
input.shift();

const dp = [-1, 1, 2, 4];
const result = [];

for (let i = 4; i <= 10; i++) {
  dp.push(dp[i - 3] + dp[i - 2] + dp[i - 1]);
}

for (let number of input) {
  result.push(dp[number]);
}

console.log(result.join('\n'));