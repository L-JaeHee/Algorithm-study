/*
  1874: 스택 수열/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => +x);

const N = parseInt(input.shift());
const stack = [];
let number = 1;
const result = [];

for (let value of input) {
  while (number <= value) {
    stack.push(number);
    // console.log(stack);
    number++;
    result.push('+');
  }
  if (stack.indexOf(value) === -1) {
    result.push('NO');
    break;
  } else {
    let times = stack.length - stack.indexOf(value);
    for (let i = 0; i < times; i++) {
      stack.pop();
      // console.log(stack);
      result.push('-');
    }
  }
}

if (result.indexOf('NO') === -1) {
  console.log(result.join('\n'));
} else {
  console.log('NO');
}