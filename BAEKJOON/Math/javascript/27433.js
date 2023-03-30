const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

function solution(input) {
  return factorial(Number(input));
}

console.log(solution(input));
