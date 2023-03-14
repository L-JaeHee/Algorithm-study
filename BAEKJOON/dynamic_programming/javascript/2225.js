const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [n, k] = input.split(" ").map((x) => Number(x));
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  dp[0] = new Array(k + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
    }
  }

  return dp[n][k];
}

console.log(solution(input));
