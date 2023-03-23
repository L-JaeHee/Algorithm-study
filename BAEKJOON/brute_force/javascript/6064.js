const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [n, ...cases] = input.split("\n");
  const result = [];

  for (let nums of cases) {
    const [M, N, x, y] = nums.split(" ").map(Number);
    let flag = true;
    let i = x;

    while (i <= M * N) {
      const ny = i % N === 0 ? N : i % N;

      if (ny === y) {
        flag = false;
        result.push(i);
        break;
      }

      i += M;
    }

    if (flag) result.push(-1);
  }

  return result.join("\n");
}

console.log(solution(input));
