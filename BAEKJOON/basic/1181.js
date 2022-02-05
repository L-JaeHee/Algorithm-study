/*
  1181: 단어 정렬/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
input = [...new Set(input)];

input.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a > b) return 1;
  if (a < b) return -1;
})

console.log(input.join('\n'));