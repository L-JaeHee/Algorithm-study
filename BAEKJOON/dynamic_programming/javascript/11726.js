/*
  11726: 2 x n 타일링/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();
input = Number(input);

const dp = [-1, 1, 2];
for (let i = 3; i <= input; i++) {
  dp.push((dp[i - 2] + dp[i - 1]) % 10007);
}

console.log(dp[input]);