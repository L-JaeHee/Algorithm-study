/*
  11053: 가장 긴 증가하는 부분수열/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
const N = input.shift();
input = input[0].split(' ').map(Number);
input.unshift(0);

const dp = [0];
let temp;
for (let i = 1; i < input.length; i++) {
  temp = [];
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j] ) {
      temp.push(dp[j] + 1);
    }
  }
  dp.push(Math.max(...temp));
}

console.log(Math.max(...dp));