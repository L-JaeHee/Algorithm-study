/*
  16194: 카드 구매하기 2/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = Number(input.shift());
input = input[0].split(' ').map((x) => +x);

const dp = [0, ...input];
let min;

for (let i = 1; i <= N; i++) {
  min = dp[i];
  for (let j = i; j > 0; j--) {
    if (min > dp[i - j] + dp[j]) {
      min = dp[i - j] + dp[j];
    }
  }
  dp[i] = min;
}

console.log(dp[N]);