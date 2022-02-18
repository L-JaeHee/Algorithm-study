/*
  11656: 접미사 배열/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('');

const arr = [];
while (input.length >= 1) {
  arr.push(input.join(''));
  input.shift();
}
arr.sort();
console.log(arr.join('\n'));