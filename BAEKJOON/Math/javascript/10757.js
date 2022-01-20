/*
  10757: 큰수 A + B/브론즈 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split(' ');

input = input.map((x) => BigInt(x));
console.log((input[0] + input[1]));