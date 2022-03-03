/*
  1912: 연속합/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
const N = +input.shift();

input = input[0].split(' ').map(Number);
const dp = new Array(N - 1).fill(0);
dp.unshift(input[0]);

for (let i = 1; i < input.length; i++) {
  dp[i] = Math.max(dp[i - 1] + input[i], input[i]);
}

console.log(Math.max(...dp));