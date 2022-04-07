/*
  2309: 일곱 난쟁이/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map(Number);

let result = [...input];
const diff = input.reduce((sum, x) => sum + x) - 100;
let status = 0;

for (let i = 0; i < result.length - 1; i++) {
  if (status === 1) break;

  for (let j = i + 1; j < result.length; j++) {
    if (result[i] + result[j] === diff) {
      result.splice(i, 1);
      result.splice(j - 1, 1);
      status++;
      break;
    }
  }
}

console.log(result.sort((a, b) => a - b).join('\n'));