/*
  1149: RGB거리/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input.map((x) => x.split(' ').map(Number));
const dp = [input[0]];

let temp;
for (let i = 1; i < N; i++) {
  temp = [0, 0, 0];
  temp[0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i][0];
  temp[1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i][1];
  temp[2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i][2];
  dp.push(temp);
}

console.log(Math.min(...dp[N - 1]));