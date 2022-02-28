/*
  10844: 쉬운 계단 수/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [-1, new Array(10).fill(0).map((x, idx) => {
  if (idx > 0) return 1;
  else return 0;
})]

for (let i = 2; i <= input; i++) {
  let temp = new Array(10).fill(0);
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      temp[1] += dp[i - 1][0] % 1000000000;
      continue;
    }
    if (j === 9) {
      temp[8] += dp[i - 1][9] % 1000000000;
      continue;
    }
    temp[j - 1] = (temp[j - 1] + dp[i - 1][j]) % 1000000000;
    temp[j + 1] = (temp[j + 1] + dp[i - 1][j]) % 1000000000;
  }
  dp.push(temp);
}

console.log(dp[input].reduce((sum, x) => sum + x) % 1000000000);