/*
  11651: 좌표 정렬하기 2/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
input = input.map((x) => x.split(' '));

input.sort((a, b) => {
  const ax = parseInt(a[0]);
  const ay = parseInt(a[1]);
  const bx = parseInt(b[0]);
  const by = parseInt(b[1]);

  if (ay > by) return 1;
  if (ay < by) return -1;
  if (ax > bx) return 1;
  if (ax < bx) return -1;
})

console.log(input.map((x) => x.join(' ')).join('\n'));