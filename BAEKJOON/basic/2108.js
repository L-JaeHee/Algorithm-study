/*
  2108: 통계학/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n').map((x) => parseInt(x));

const N = input.shift();
input.sort((a, b) => a - b);

const dict = {};
const modes = [];

for (let value of input) {
  if (dict[value]) {
    dict[value] = dict[value] + 1;
  } else {
    dict[value] = 1;
  }
}

let maxModeNumber = 0;
for (let value of Object.values(dict)) {
  if (maxModeNumber < value) {
    maxModeNumber = value;
  }
}

for (let value in dict) {
  if (dict[value] === maxModeNumber) {
    modes.push(value);
  }
}


console.log(Math.round(input.reduce((sum, x) => sum + x, 0) / N));
console.log(input[Math.floor(N / 2)]);
if (modes.length > 1) {
  console.log(modes.sort((a, b) => a - b)[1]);
} else {
  console.log(modes[0]);
}
console.log(input[input.length - 1] - input[0]);