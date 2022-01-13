/*
 2941: 크로아티아 알파벳/실버 5
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim();

const croAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let result = input;
for (const char of croAlpha) {
  result = result.replace(new RegExp(`${char}`, 'ig'), '*');
}

console.log(result.length);