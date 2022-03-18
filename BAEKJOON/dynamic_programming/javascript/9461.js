/*
  9461: 파도반 수열/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map(Number);
input.shift();

const dp = [0, 1, 1];
let result = [];

for (let i = 3; i <= Math.max(...input); i++) {
  dp.push(dp[i - 3] + dp[i - 2]);
}

for (let num of input) {
  result.push(dp[num]);
}

console.log(result.join('\n'));