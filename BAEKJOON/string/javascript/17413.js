/*
  17413: 단어 뒤집기2/실버 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

const re = /(<.+?>|\s)/;
let result = '';
input = input.split(re);
for (let word of input) {
  if (re.test(word)) {
    result += word;
  } else {
    result += word.split('').reverse().join('');
  }
}

console.log(result);