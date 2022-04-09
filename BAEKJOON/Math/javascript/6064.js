/*
  6064: 카잉 달력/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.shift();
input = input.map((x) => x.split(' ').map(Number));

const ans = [];

for (let command of input) {
  let [M, N, x, y] = command;
  x -= 1
  y -= 1

  max = Math.max(M, N);

  let result = x;
  while (result <= max * 40000) {
    if (result % N === y) {
      ans.push(result + 1);
      break;
    } else {
    result += M
    }
  }
  if (result > max * 40000) ans.push(-1);
}

console.log(ans.join('\n'));