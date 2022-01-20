/*
  2839: 설탕배달/브론즈 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = +fs.readFileSync(localPath).toString();

solution(input);

function solution(N) {
  const cnt = Math.floor(N / 5);
  
  for(let i = cnt; i > -1; i--) {
    let total = N - (i * 5);
    if (total % 3 === 0) {
      return console.log(i + total / 3);
    }
  }

  return console.log(-1);
}