/*
  2193: 이친수/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [-1, [0, 1], [1, 0]];

for (let i = 3; i <= input; i++) {
  let temp = new Array(2).fill(0);
  temp[0] = BigInt(dp[i - 1][0] + dp[i - 1][1]);
  temp[1] = BigInt(dp[i - 1][0]);
  dp.push(temp);
}

console.log(String(BigInt(dp[input].reduce((sum, x) => sum + x))));