const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const dp = [-1, [0, 1]];

  for (let i = 2; i <= Number(input); i++) {
    dp[i] = [BigInt(dp[i - 1][0] + dp[i - 1][1]), BigInt(dp[i - 1][0])];
  }

  return String(dp[input].reduce((sum, cur) => sum + cur));
}

console.log(solution(input));
