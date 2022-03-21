/*
  1746: 듣보잡/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const people1 = input.slice(0, N);
const people2 = new Set(input.slice(N, ));
const result = [];

for (let person of people1) {
  if (people2.has(person)) {
    result.push(person);
  }
}

result.sort();
console.log(`${result.length}\n${result.join('\n')}`);