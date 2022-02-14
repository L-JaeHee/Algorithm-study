/*
  10799: 쇠막대기/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

input = input.replace(/\(\)/g, '*');
const stack = [];
let result = 0;

for (let value of input) {
  if (value === '*') {
    result += stack.length;
  }
  if (value === '(') {
    stack.push(value);
  }
  if (value === ')') {
    stack.pop();
    result++;
  }
}

console.log(result);