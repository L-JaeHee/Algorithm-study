/*
  11653: 소인수 분해/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString();

for (let i = 2; i <= input; i++) {
  if (input % i === 0) {
    console.log(i);
    input = input / i;
    i = 1;
  }
}