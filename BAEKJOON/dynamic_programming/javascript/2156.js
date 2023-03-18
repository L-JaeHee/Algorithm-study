const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  input = input.split("\n").map((x) => Number(x));
  const n = input.shift();
  const dp = new Array(n + 3).fill(0);
  input = [0, 0, 0].concat(input);

  for (let i = 3; i < n + 3; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }

  return dp[dp.length - 1];
}

console.log(solution(input));
