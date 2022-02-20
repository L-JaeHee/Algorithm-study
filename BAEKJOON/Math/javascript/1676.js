/*
  1676: 팩토리얼 0의 개수/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

input = Number(input);
let result = 0;

result += Math.floor(input / 5);
result += Math.floor(input / 25);
result += Math.floor(input / 125);

console.log(result);