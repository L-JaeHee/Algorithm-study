const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const dp = new Array(Number(input) + 1).fill(0).map(() => new Array(10).fill(0));
  dp[1] = new Array(10).fill(1);

  for (let i = 2; i <= input; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = dp[i - 1].slice(j).reduce((acc, cur) => acc + cur) % 10007;
    }
  }

  return dp[input].reduce((acc, cur) => acc + cur) % 10007;
}

console.log(solution(input));
