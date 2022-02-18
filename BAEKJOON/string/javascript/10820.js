/*
  10820: 문자열 분석/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

for (let string of input) {
  if (string === '') continue;
  const temp = [0, 0, 0, 0];
  for (let word of string) {
    if (word >= 'a' && word <= 'z') {
      temp[0]++;
    } else if (word >= 'A' && word <= 'Z') {
      temp[1]++;
    } else if (word >= '0' && word <= '9') {
      temp[2]++;
    } else if (word === ' ') {
      temp[3]++;
    }
  }
  console.log(temp.join(' '));
}