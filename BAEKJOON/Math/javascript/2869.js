/*
  2869: 달팽이는 올라가고 싶다/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split(' ');

input = input.map((x) => +x);
const A = input[0];
const B = input[1];
const V = input[2];

if ((V - B) % (A - B) === 0) {
  console.log((V - B) / (A - B));
} else {
  console.log(Math.floor((V - B) / (A - B)) + 1);
}