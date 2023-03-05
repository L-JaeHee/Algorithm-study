const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  return input
    .split("")
    .map((x, idx) => input.slice(idx))
    .sort()
    .join("\n");
}

console.log(solution(input));
