/*
  1193: 분수 찾기/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString();

let right = 1;
let cnt = 1;
let term = 2;

while (input > right) {
  right += term;
  cnt += 1;
  term += 1;
}


term = right - input;
if (cnt % 2 === 0) {
  console.log(`${cnt - term}/${1 + term}`);
} else {
  console.log(`${1 + term}/${cnt - term}`);
}