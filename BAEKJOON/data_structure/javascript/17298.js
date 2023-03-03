const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, nums] = input.split("\n");
  nums = nums.split(" ").map((x) => Number(x));
  const stack = [];
  const result = Array(Number(n)).fill(-1);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      result[stack.pop()] = nums[i];
    }

    stack.push(i);
  }

  return result.join(" ");
}

console.log(solution(input));
