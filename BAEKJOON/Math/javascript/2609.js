const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [b, a] = input
    .split(" ")
    .map((x) => Number(x))
    .sort();

  let n;
  while (b !== 0) {
    n = a % b;
    a = b;
    b = n;
  }

  return [a, input.split(" ").reduce((acc, cur) => acc * (cur / a), a)].join("\n");
}

console.log(solution(input));
