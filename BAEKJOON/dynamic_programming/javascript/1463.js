const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const N = Number(input);
  const dp = Array(N + 1).fill(0);

  if (N === 1) {
    return 0;
  }

  for (let i = 2; i <= N; i++) {
    const values = [];

    if (i % 3 === 0) {
      values.push(1 + dp[i / 3]);
    }
    if (i % 2 === 0) {
      values.push(1 + dp[i / 2]);
    }
    values.push(1 + dp[i - 1]);

    dp[i] = Math.min(...values);
  }

  return dp[N];
}

console.log(solution(input));
