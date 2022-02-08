/*
  9012: 괄호/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
const result = [];

for (const value of input) {
  let currentStatus = 0;
  const temp = value.split('');
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '(') {
      currentStatus++;
    } else if (temp[i] === ')') {
      currentStatus--;
    }
    if (currentStatus < 0) {
      break;
    }
  }
  
  if (currentStatus === 0) {
    result.push('YES');
  } else {
    result.push('NO');
  }
}

console.log(result.join('\n'));