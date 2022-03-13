/*
  11055: 가장 큰 증가 부분 수열/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input[0].split(' ').map(Number);
const dp = [...input];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) {
      dp[i] = Math.max(dp[i], dp[j] + input[i]);
    }
  }
}

console.log(Math.max(...dp));