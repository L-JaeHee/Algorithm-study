/*
  1406: 에디터/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const leftStack = input.shift().split('');
const rightStack = [];
input.shift();
input = input.map((x) => x.split(' '));

for (const value of input) {
  if (value[0] === 'L' && leftStack.length !== 0) {
    rightStack.push(leftStack.pop());
  } else if (value[0] === 'D' && rightStack.length !== 0) {
    leftStack.push(rightStack.pop());
  } else if (value[0] === 'B') {
    leftStack.pop();
  } else if (value[0] === 'P') {
    leftStack.push(value[1]);
  }
}

const result = leftStack.join('') + rightStack.reverse().join('');
console.log(result);