/*
  2231: 분해합/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

let result = 0;

for (let i = 1; i < input; i++) {
  const temp = String(i).split('').map((x) => +x).reduce((sum, x) => sum + x) + i;
  if (temp === input) {
    result = i;
    break;
  }
}

console.log(result);