/*
  15990: 1,2,3 더하기 5/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => +x);
input.shift();

const dp = [0, [1, 0, 0], [0, 1, 0], [1, 1, 1]];

for (let i = 4; i <= Math.max(...input); i++) {
  let first = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
  let second = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
  let third = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;
  dp.push([first, second, third]);
}

const result = []
for (let command of input) {
  result.push((dp[command].reduce((sum, x) => sum + x)) % 1000000009);
}

console.log(result.join('\n'));