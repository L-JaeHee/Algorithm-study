const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, ...nums] = input.split("\n");
  nums = nums.map((x) => Number(x));
  const max = Math.max(...nums);
  const result = [];

  const dp = new Array(max + 1).fill(0);
  dp[1] = [1, 0, 0];
  dp[2] = [0, 1, 0];
  dp[3] = [1, 1, 1];

  for (let i = 4; i <= max; i++) {
    dp[i] = [(dp[i - 1][1] + dp[i - 1][2]) % 1000000009, (dp[i - 2][0] + dp[i - 2][2]) % 1000000009, (dp[i - 3][0] + dp[i - 3][1]) % 1000000009];
  }

  for (let num of nums) {
    const sum = dp[num].reduce((acc, cur) => acc + cur, 0) % 1000000009;
    result.push(sum);
  }

  return result.join("\n");
}

console.log(solution(input));
