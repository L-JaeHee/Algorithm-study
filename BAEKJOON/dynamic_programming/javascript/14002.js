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
  nums.unshift(-1);
  const dp = new Array(Number(n) + 1).fill(0);
  dp[1] = [nums[1]];

  for (let i = 2; i <= n; i++) {
    const arr = [[nums[i]]];

    for (let j = 1; j < i; j++) {
      if (nums[i] > nums[j]) {
        arr.push(dp[j].concat(nums[i]));
      }
    }

    dp[i] = arr.reduce((acc, cur) => {
      if (acc.length < cur.length) {
        return cur;
      } else {
        return acc;
      }
    });
  }

  dp.shift();
  const result = dp.reduce((acc, cur) => {
    if (acc.length < cur.length) {
      return cur;
    } else {
      return acc;
    }
  });

  return [result.length, result.join(" ")].join("\n");
}

console.log(solution(input));
