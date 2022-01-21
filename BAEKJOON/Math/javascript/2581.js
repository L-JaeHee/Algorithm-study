/*
  2581: 소수/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

const min = +input[0];
const max = +input[1];
const nums = [...Array(max + 1 - min)].map((v, i) => i + min);
let sum = 0;
let minPrime;


function primeNumber(num) {
  if (num === 1) {
    return 0;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  if (!(minPrime)) {
    minPrime = num;
  }
  return sum += num;
}

for (const num of nums) {
  primeNumber(num);
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minPrime);
}