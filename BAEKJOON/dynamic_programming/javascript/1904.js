/*
  1904: 01타일/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  dp.push((dp[i - 2] + dp[i - 1]) % 15746);
}

console.log(dp[input]);