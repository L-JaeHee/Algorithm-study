const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, ...rgbs] = input.split("\n");
  rgbs = rgbs.map((x) => x.split(" ").map((x) => Number(x)));
  rgbs.unshift(-1);
  const dp = new Array(Number(n) + 1).fill(0).map(() => new Array(3).fill(0));
  dp[1] = rgbs[1];

  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgbs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgbs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgbs[i][2];
  }

  return Math.min(...dp[n]);
}

console.log(solution(input));
