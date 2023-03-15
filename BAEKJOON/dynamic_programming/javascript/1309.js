const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const dp = new Array(Number(input) + 1).fill(0);
  dp[1] = 3;
  dp[2] = 7;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  return dp[input];
}

console.log(solution(input));
