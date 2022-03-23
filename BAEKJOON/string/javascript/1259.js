/*
  1259: 팰린드롬수/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.pop();

const result = [];

for (let value of input) {
  if (value === value.split('').reverse().join('')) {
    result.push('yes');
  } else {
    result.push('no');
  }
}

console.log(result.join('\n'));