/*
 1157: 단어 공부/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().toUpperCase();

let counts= {}
for (let i = 0; i < input.length; i++) {
  word = input[i];
  counts[word] = counts[word] ? counts[word] + 1 : 1;
}

const max = Math.max(...Object.values(counts));
let maxChar = '';
let cnt = 0;

for (let char in counts) {
  if (counts[char] === max) {
    maxChar = char;
    cnt++;
  }
  if (cnt > 1) {
    console.log('?');
    return;
  }
}

console.log(maxChar);
