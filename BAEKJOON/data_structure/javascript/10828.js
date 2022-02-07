/*
  10828: 스택/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
input = input.map((x) => x.split(' '));
const stack = [];
const result = [];

for (const command of input) {
  if (command[0] === 'push') {
    stack.push(command[1]);
  } else if (command[0] === 'pop') {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack.pop());
    }
  } else if (command[0] === 'size') {
    result.push(stack.length);
  } else if (command[0] === 'empty') {
    if (stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (command[0] === 'top') {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
  }
}

console.log(result.join('\n'));
