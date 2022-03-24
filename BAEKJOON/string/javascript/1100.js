/*
  1100: 하얀 칸/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

let line;
let result = 0;

for (let i = 0; i < input.length; i++) {
  line = input[i].split('');
  if (i % 2 === 0) {
    for (let j = 0; j < line.length; j = j + 2) {
      if (line[j] === 'F') result++;
    }
  } else {
    for (let j = 1; j <line.length; j = j + 2) {
      if (line[j] === 'F') result++;
    }
  }
}

console.log(result);