/*
  4948: 베르트랑 공준/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
console.log(input);
input.pop();
input = input.map((x) => +x);

const max = 123456 * 2;
const primes = [...Array(max + 1)].fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
  let m = 2;
  if (primes[i]) {
    while (i * m <= max) {
      primes[i * m] = false;
      m++;
    }
  }
}

let result = []
for (const num of input) {
  let cnt = 0;
  for (let i = num + 1; i <= num * 2; i++) {
    if (primes[i]) {
      cnt++;
    }
  }
  result.push(cnt);
}

console.log(result.join('\n'));