const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [n, ...nums] = input.split("\n").map((x) => Number(x));
  const result = [];
  const max = Math.max(...nums);
  const dp = new Array(max + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= max; i++) {
    dp[i] = (((dp[i - 1] + dp[i - 2]) % 1000000009) + dp[i - 3]) % 1000000009;
  }

  for (let num of nums) {
    result.push(dp[num]);
  }

  return result.join("\n");
}

console.log(solution(input));
