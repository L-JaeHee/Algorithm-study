/*
  1436: 영화감독 숌/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString().trim();

let cnt = 1;
let result = 666;
let i = 667;
const regex = /6{3}/;

while (cnt < input) {
  let currentNumber = String(i);
  if (regex.test(currentNumber)) {
    cnt++;
    result = currentNumber;
  }
  i++;
}

console.log(result);