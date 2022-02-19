/*
  6588: 골드바흐의 추측/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.pop();

const MAX = 1000000;

let primes = new Array(MAX + 1).fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i < Math.ceil(Math.sqrt(primes.length)); i++) {
  let m = 2;
  while (i * m <= MAX) {
    primes[i * m] = false;
    m++;
  }
}

primes = primes.map((x, idx) => {
  if (x) return idx;
})
primes = primes.filter((x) => {
  if (x) return true;
})
primes = new Set(primes);

function checker(number) {
  for (let i = 2; i < number / 2 + 1; i++) {
    let temp = number - i;
    if (primes.has(temp) && primes.has(i)) {
      return [i, temp];
    }
  }
  return -1
}

const result = [];

for (let value of input) {
  let ans = checker(value);
  if (ans === -1) {
    result.push('Goldbach\'s conjecture is wrong.');
  } else {
    result.push(`${value} = ${ans[0]} + ${ans[1]}`);
  }
}

console.log(result.join('\n'));