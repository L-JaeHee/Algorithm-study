/*
  1929: 소수 구하기/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split(' ');

const min = +input[0];
const max = +input[1];

const primes = Array(max + 1).fill(true);
primes[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
  let m = 2;
  while (i * m <= max) {
    primes[i * m] = false;
    m++;
  }
}

const result = [];
for (let i = min; i <= max; i++) {
  if (primes[i]) {
    result.push(i);
  }
}

console.log(result.join(' '));