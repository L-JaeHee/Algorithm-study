const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const nums = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  let sum = nums.reduce((sum, cur) => sum + cur);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - nums[i] - nums[j] === 100) {
        return nums
          .filter((_, idx) => {
            if (idx === i || idx === j) return false;
            else return true;
          })
          .join("\n");
      }
    }
  }
}

console.log(solution(input));
