/*
  9465: 스티커/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const T = +input.shift();
let N;
let testCase;
let dp;
let temp;

for (let t = 0; t < T; t++) {
  testCase = [];

  for (let i = 0; i < 3; i++) {
    testCase.push(input.shift());
  }

  N = testCase.shift();
  testCase = [testCase[0].split(' ').map(Number), testCase[1].split(' ').map(Number)];
  testCase[0].unshift(0);
  testCase[1].unshift(0);
  dp = [new Array(3).fill(0)];

  for (let i = 1; i <= N; i++) {
    dp.push([Math.max(...dp[i - 1]), Math.max(dp[i - 1][2] + testCase[0][i], dp[i - 1][0] + testCase[0][i]), Math.max(dp[i - 1][0] + testCase[1][i], dp[i - 1][1] + testCase[1][i])]);
  }

  console.log(Math.max(...dp[dp.length - 1]));
}