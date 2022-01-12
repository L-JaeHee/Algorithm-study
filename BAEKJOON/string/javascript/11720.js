/*
 11720: 숫자의 합/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');

const N = +input[0];
let nums = input[1];

nums = nums.split('').map((x) => Number(x));
let result = 0;
for (let i = 0; i < N; i++) {
  result += nums[i];
}

console.log(result);
