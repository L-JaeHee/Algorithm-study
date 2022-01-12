/*
 2908: 상수/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split(' ');

// [ '734', '893' ]

function reverseStr(str) {
  return str.split("").reverse().join("");
}

input = input.map(x => +reverseStr(x));
const max = input[0] > input[1] ? input[0] : input[1];
console.log(max);