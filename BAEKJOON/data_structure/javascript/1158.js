/*
  1158: 요세푸스 문제/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split(' ').map((x) => parseInt(x));

const [N, K] = input;
let circle = [...Array(N)].map((x, idx) => idx + 1);
const result = [];
let idx = 0;

for (let i = 0; i < N; i++) {
  idx = idx + K - 1;
  if (idx >= circle.length) {
    idx = idx % circle.length;
  }
  result.push(circle.splice(idx, 1)[0]);
}

console.log(`<${result.join(', ')}>`);