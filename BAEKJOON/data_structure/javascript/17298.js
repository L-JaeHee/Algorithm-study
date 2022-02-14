/*
  17298: 오큰수/골드 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const sequence = input[1].split(' ').map((x) => +x);
const result = new Array(parseInt(input[0])).fill(-1);
const stack = [];

sequence.forEach((value, idx) => {
  while (stack.length && sequence[stack[stack.length - 1]] < value) {
    result[stack.pop()] = value;
  }
  stack.push(idx);
})

console.log(result.join(' '));