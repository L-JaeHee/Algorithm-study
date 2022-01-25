/*
  4153: 직각삼각형/브론즈 3
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.pop()

const result = [];
input.forEach((x) => {
  const nums = x.split(' ').map((x) => +x);
  const max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);
  if (max**2 === nums[0]**2 + nums[1]**2) {
    result.push('right');
  } else {
    result.push('wrong');
  }
})

console.log(result.join('\n'));