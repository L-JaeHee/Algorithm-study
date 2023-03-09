const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, pis] = input.split("\n");
  pis = pis.split(" ").map((x) => Number(x));
  pis.unshift(-1);

  const dp = new Array(Number(n) + 1).fill(0);
  dp[1] = pis[1];

  for (let i = 2; i <= Number(n); i++) {
    const values = [];
    if (pis[i]) values.push(pis[i]);

    for (let j = i - 1; j > 0; j--) {
      values.push(dp[j] + pis[i - j]);
    }

    dp[i] = Math.min(...values);
  }

  return dp[n];
}

console.log(solution(input));
