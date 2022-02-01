/*
  7568: 덩치/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const N = +input.shift();
input = input.map((x) => x.split(' ').map((x) => +x));
const result = [];

for (let i = 0; i < input.length; i++) {
  let cnt = 0;

  for (let j = 0; j < input.length; j++) {
    if (i === j) {
      continue
    }
    if (input[i][0] >= input[j][0] || input[i][1] >= input[j][1]) {
      cnt++;
    }
  }
  
  result.push(N - cnt);
}

console.log(result.join(' '));