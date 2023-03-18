const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  input = input.split("\n");
  const t = Number(input.shift());
  const result = [];

  for (let i = 0; i < input.length; i += 3) {
    const n = Number(input[i]);
    const nums0 = input[i + 1].split(" ").map((x) => Number(x));
    const nums1 = input[i + 2].split(" ").map((x) => Number(x));
    const dp = new Array(n + 2).fill(0).map(() => new Array(2).fill(0));

    for (j = 0; j < n; j++) {
      dp[j + 2][0] = Math.max(dp[j + 1][1] + nums0[j], dp[j][1] + nums0[j]);
      dp[j + 2][1] = Math.max(dp[j + 1][0] + nums1[j], dp[j][0] + nums1[j]);
    }

    result.push(Math.max(...dp[dp.length - 1]));
  }

  return result.join("\n");
}

console.log(solution(input));
