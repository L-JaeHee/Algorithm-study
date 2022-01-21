/*
  1978: 소수찾기/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map((x) => +x);
let result = 0;

function primeNumber(num) {
  if (num === 1) {
    return 0;
  }

  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return result += 1;
}

for (const num of nums) {
  primeNumber(num);
}

console.log(result);