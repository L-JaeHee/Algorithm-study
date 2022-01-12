/*
 1152: 단어의 개수/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

if (input.length === 0) console.log(0);
else console.log(input.split(' ').length);