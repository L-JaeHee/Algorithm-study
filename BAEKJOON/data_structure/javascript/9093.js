/*
  9093: 단어 뒤집기/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
console.log(input.map((string) => string.split(' ').map((word) => word.split('').reverse().join('')).join(' ')).join('\n'));
