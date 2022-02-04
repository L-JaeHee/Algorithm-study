/*
  2751: 수 정렬하기2/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => parseInt(x));

input.shift();
input.sort((a, b) => a - b);
console.log(input.join('\n'));