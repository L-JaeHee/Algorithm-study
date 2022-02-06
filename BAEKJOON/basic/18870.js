/*
  18870: 좌표 압축/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const dict = {};
const result = [];
let cnt = 0;

input = input[1].split(' ').map((x) => parseInt(x));
input.slice().sort((a, b) => a - b).map((x) => {
  if (dict[x] === undefined) {
    dict[x] = cnt;
    cnt++;
  }
});

input.map((x) => {
  result.push(dict[x]);
})

console.log(result.join(' '));