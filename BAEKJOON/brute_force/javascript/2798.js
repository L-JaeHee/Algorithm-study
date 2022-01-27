/*
  2798: 블랙잭/브론즈 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');

const [N, jack] = input.shift().split(' ').map((x) => +x);
const nums = input[0].split(' ').map((x) => +x);

let result  = 0;
let num;

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      num = nums[i] + nums[j] + nums[k];
      if (num <= jack && num > result) {
        result = num;
      }
    }
  }
}

console.log(result);
