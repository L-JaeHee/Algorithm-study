/*
  2156: 포도주 시식/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input.map(Number);
input.unshift(0);

const dp = [0, input[1], input[1] + input[2]];
let temp;

for (let i = 3; i <= N; i++) {
  temp = [];
  temp.push(dp[i - 1]);
  temp.push(dp[i - 2] + input[i]);
  temp.push(dp[i - 3] + input[i - 1] + input[i]);
  dp.push(Math.max(...temp));
}

console.log(dp[N]);