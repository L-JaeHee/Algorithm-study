/*
  10872: 팩토리얼/브론즈 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

function fact(num) {
  if (num <= 1) {
    return 1;
  }
  return num * fact(num - 1);
}

console.log(fact(input));