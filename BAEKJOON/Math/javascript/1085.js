/*
  1085: 직사각형에서 탈출/브론즈 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split(' ');

const [x, y, w, h] = [+input[0], +input[1], +input[2], +input[3]];
let min = x < y ? x : y;

if (w - x < min) {
  min = w - x;
}
if (h - y < min) {
  min = h - y;
}

console.log(min);
