/*
  1969: DNA/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const DNAs = input.map((x) => x.split(''));
let ans = '';
let result = 0;
let ACGT;
let max;

for (let i = 0; i < K; i++) {
  ACGT = [0, 0, 0, 0];
  for (let j = 0; j < N; j++) {
    if (DNAs[j][i] === 'A') {
      ACGT[0]++;
    } else if (DNAs[j][i] === 'C') {
      ACGT[1]++;
    } else if (DNAs[j][i] === 'G') {
      ACGT[2]++;
    } else if (DNAs[j][i] === 'T') {
      ACGT[3]++;
    }
  }

  max = Math.max(...ACGT);
  ans += 'ACGT'[ACGT.indexOf(max)];
  ACGT.splice(ACGT.indexOf(max), 1);
  result += ACGT.reduce((sum, x) => sum + x);
}

console.log(`${ans}\n${result}`);