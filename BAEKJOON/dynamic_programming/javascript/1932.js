const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, ...triangle] = input.split("\n");
  triangle = triangle.map((x) => x.split(" ").map((x) => Number(x)));
  const dp = new Array(Number(n)).fill(0).map((_, idx) => new Array(idx + 1).fill(0));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];

    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j - 1] + triangle[i][j], dp[i - 1][j] + triangle[i][j]);
    }
  }

  return Math.max(...dp[n - 1]);
}

console.log(solution(input));
