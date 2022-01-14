/*
  2292: 벌집/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(baekPath).toString();

let right = 1;
let cnt = 1;
let term = 6;

while (input > right) {
  right += term;
  cnt += 1;
  term += 6;
}

console.log(cnt);