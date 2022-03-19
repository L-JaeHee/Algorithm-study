/*
  2133: 타일 채우기/골드 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [0, 0, 3];
let temp;

for (let i = 3; i <= input; i++) {
  temp = 0;
  if (i % 2 === 0) {
    temp += dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 2; j -= 2) {
      temp += dp[j] * 2;
    }
    temp += 2;
  }
  dp.push(temp);
}

console.log(dp[input]);