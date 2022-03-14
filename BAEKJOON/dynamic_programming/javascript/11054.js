/*
  11054: 가장 긴 바이토닉 부분 수열/골드 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input[0].split(' ').map(Number);
input.unshift(0);
input.push(0);

const dpLeft = [0];
const dpRight = new Array(N + 2).fill(0);
let temp;

for (let i = 1; i <= N + 1; i++) {
  temp = [0];
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) {
      temp.push(dpLeft[j] + 1);
    }
  }
  dpLeft.push(Math.max(...temp));
}


for (let i = N; i >= 0; i--) {
  temp = [0];
  for (let j = N + 2; j > i; j--) {
    if (input[i] > input[j]) {
      temp.push(dpRight[j] + 1);
    }
  }
  dpRight[i] = Math.max(...temp);
}

temp = [];
for (let i = 0; i < dpRight.length; i++) {
  temp.push(dpRight[i] + dpLeft[i]);
}

console.log(Math.max(...temp) - 1);