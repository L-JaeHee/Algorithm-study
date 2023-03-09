const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const dp = [-1, [0, ...new Array(9).fill(1)]];

  for (let i = 2; i <= Number(input); i++) {
    dp[i] = new Array(10).fill(0);
    dp[i][0] = dp[i - 1][1];
    dp[i][9] = dp[i - 1][8];

    for (let j = 1; j < 9; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }

  return dp[input].reduce((sum, cur) => sum + cur) % 1000000000;
}

console.log(solution(input));
