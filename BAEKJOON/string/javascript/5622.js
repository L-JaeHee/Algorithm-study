/*
  5622: 다이얼/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

function dial(char) {
  const asc = char.charCodeAt();
  if (asc >= 65 && asc <= 67) return 3;
  if (asc >= 68 && asc <= 70) return 4;
  if (asc >= 71 && asc <= 73) return 5;
  if (asc >= 74 && asc <= 76) return 6;
  if (asc >= 77 && asc <= 79) return 7;
  if (asc >= 80 && asc <= 83) return 8;
  if (asc >= 84 && asc <= 86) return 9;
  if (asc >= 87 && asc <= 90) return 10;
}

const counts = {};
for (const char of input) {
  counts[char] = counts[char] ? counts[char] + 1 : 1;
}

let result = 0;
for (const char in counts) {
  result += dial(char) * counts[char]
}

console.log(result);