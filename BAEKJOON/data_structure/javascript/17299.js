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
  n = Number(n);
  nums = nums.split(" ").map((x) => Number(x));
  const result = Array(n).fill(-1);
  const obj = {};
  const stack = [];

  for (let num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      obj[nums[stack[stack.length - 1]]] < obj[nums[i]]
    ) {
      result[stack.pop()] = nums[i];
    }

    stack.push(i);
  }

  return result.join(" ");
}

console.log(solution(input));
