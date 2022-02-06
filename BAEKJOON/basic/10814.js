/*
  10814: 나이순 정렬/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

input.shift();
input = input.map((x) => x.split(' ')).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

console.log(input.map((x) => x.join(' ')).join('\n'));
