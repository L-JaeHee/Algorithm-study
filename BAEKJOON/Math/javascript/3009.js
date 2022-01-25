/*
  3009: 네 번째 점/브론즈 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const xs = {};
const ys = {};

input.forEach((v) => {
  const [x, y] = v.split(' ');
  if (xs[x]) {
    xs[x]++;
  } else {
    xs[x] = 1;
  }

  if (ys[y]) {
    ys[y]++;
  } else {
    ys[y] = 1;
  }
})

const result = [];
for (x in xs) {
  if (xs[x] === 1) {
    result.push(x);
  }
}

for (y in ys) {
  if (ys[y] === 1) {
    result.push(y);
  }
}

console.log(result.join(' '));