/*
 2675: 문자열 반복/브론즈 2
*/

const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const [times, words] = input[i].split(' ');
  let result = '';

  for (let j = 0; j < words.length; j++) {
    result += words[j].repeat(times);
  }
  console.log(result);
}