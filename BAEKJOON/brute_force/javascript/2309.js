/*
  2309: 일곱 난쟁이/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(baekPath).toString().trim().split('\n').map(Number);

const MAX = 9;
let result;

for (let a = 0; a < MAX - 6; a++) {
  for (let b = a + 1; b < MAX - 5; b++) {
    for (let c = b + 1; c < MAX - 4; c++) {
      for (let d = c + 1; d < MAX - 3; d++) {
        for (let e = d + 1; e < MAX - 2; e++) {
          for (let f = e + 1; f < MAX - 1; f++) {
            for (let g = f + 1; g < MAX; g++) {
              if (input[a] + input[b] + input[c] + input[d] + input[e] + input[f] + input[g] === 100) {
                result = [input[a], input[b], input[c], input[d], input[e], input[f], input[g]];
              }
            }
          }
        }
      }
    }
  }
}

console.log(result.sort((a, b) => a - b).join('\n'));
