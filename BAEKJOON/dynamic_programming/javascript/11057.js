/*
  11057: 오르막 수/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

const dp = [-1, new Array(10).fill(1)];
let temp;

for (let i = 2; i <= input; i++) {
  temp = [];
  for (let j = 0; j < 10; j++) {
    temp.push((dp[i - 1].slice(j,).reduce((sum, x) => sum + x)) % 10007);
  }
  dp.push(temp);
}

console.log((dp[input].reduce((sum, x) => sum + x)) % 10007);