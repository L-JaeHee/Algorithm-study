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
  dp[1] = 1;

  for (let i = 1; i <= input; i++) {
    const arr = [];

    for (let j = 1; j ** 2 <= i; j++) {
      arr.push(1 + dp[i - j ** 2]);
    }

    dp[i] = Math.min(...arr);
  }

  return dp[input];
}

console.log(solution(input));
