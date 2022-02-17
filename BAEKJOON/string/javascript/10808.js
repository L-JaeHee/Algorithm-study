/*
  10808: 알파벳 개수/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

const alphabets = new Array(26).fill(0);
for (let alphabet of input) {
  alphabets[alphabet.charCodeAt() - 97]++;
}

console.log(alphabets.join(' '));