/*
  1699: 제곱수의 합/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [0];
let temp;

for (let i = 1; i <= input; i++) {
  temp = [];
  for (let j = 1; j <= Math.sqrt(i); j++) {
    temp.push(dp[i - j**2]);
  }
  dp.push(Math.min(...temp) + 1);
}

console.log(dp[input]);