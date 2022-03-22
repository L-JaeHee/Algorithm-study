/*
  10610: 30/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('');

const sum = input.map(Number).reduce((sum, x) => sum + x);

if (new Set(input).has('0') && sum % 3 === 0) {
  console.log(input.sort((a, b) => Number(b) - Number(a)).join(''));
} else {
  console.log(-1);
}

