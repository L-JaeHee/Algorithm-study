/*
  10870: 피보나치 수 5/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

function fibo(num) {
  if (num === 2 || num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  return fibo(num - 2) + fibo(num - 1);
}

console.log(fibo(input));