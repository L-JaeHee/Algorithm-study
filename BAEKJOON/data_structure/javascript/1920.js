const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, nums, m, targets] = input.split("\n");
  nums = nums.split(" ").map(Number);
  targets = targets.split(" ").map(Number);
  const numMap = new Map();
  const result = [];

  for (let num of nums) {
    numMap.set(num, true);
  }

  for (let target of targets) {
    if (numMap.get(target)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result.join("\n");
}

console.log(solution(input));
