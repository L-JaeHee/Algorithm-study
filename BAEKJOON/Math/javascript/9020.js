/*
  9020: 골드바흐의 추측/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => +x);

const t = input.shift();

// 에라토스테네스의 체
let primes = [...Array(10001)].fill(true);
primes[0] = false;
primes[1] = false;
for (let i = 2; i <= Math.ceil(Math.sqrt(10000)); i++) {
  let m = 2;
  while (i * m <= 10000) {
    primes[i * m] = false;
    m++;
  }
}
const resultPrimes = [];
primes.forEach((v, i) => {
  if(v) {
    resultPrimes.push(i);
  }
})

// 문제 해결
const result = [];
input.forEach((v) => {
  let i = Math.floor(v / 2);
  while (i > 1) {
    const idx = resultPrimes.indexOf(v - i);
    if (idx > -1 && resultPrimes.indexOf(i) > -1) {
      // console.log(`i = ${i}, idx = ${idx}`);
      result.push(`${i} ${resultPrimes[idx]}`);
      break;
    } else {
      i--;
    }
  }
})

console.log(result.join('\n'));