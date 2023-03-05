const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const nums = input.split(" ");

  return Number(nums[0] + nums[1]) + Number(nums[2] + nums[3]);
}

console.log(solution(input));
