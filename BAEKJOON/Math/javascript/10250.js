/*
  10250: ACM호텔/브론즈 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const temp = input[i].split(' ').map((x) => +x);
  const H = temp[0];
  const W = temp[1];
  const N = temp[2];
  
  const number = Math.floor(N / H);
  const floor = N % H;
  if (floor === 0) {
    console.log(`${H}${String(number).padStart(2, '0')}`);
  } else {
    console.log(`${floor}${String(number + 1).padStart(2, '0')}`);
  }
}