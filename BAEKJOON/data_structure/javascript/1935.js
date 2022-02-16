/*
  1935: 후위 표기식2/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = parseInt(input.shift());
let expression = input.shift();
const values = {};

let char = 65;
for (let i = 0; i < N; i++) {
  values[String.fromCharCode(char)] = parseInt(input[i]);
  char++;
}

const commands = {
  '*': (x, y) => x * y,
  '+': (x, y) => x + y,
  '/': (x, y) => x / y,
  '-': (x, y) => x - y
}

const temp = [];
for (let ex of expression) {
  if (ex === '*' || ex === '+' || ex === '/' || ex === '-') {
    let second = temp.pop();
    let first = temp.pop();
    temp.push(commands[ex](first, second));
  } else {
    temp.push(values[ex]);
  }
}

console.log(temp[0].toFixed(2));