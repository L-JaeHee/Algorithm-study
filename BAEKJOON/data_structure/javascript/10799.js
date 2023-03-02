const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const replacedInput = input.replace(/\(\)/g, "*");
  let result = 0;
  let stick = 0;

  for (let char of replacedInput) {
    if (char === "(") {
      stick++;
      result++;
    } else if (char === ")") {
      stick--;
    } else if (char === "*") {
      result += stick;
    }
  }

  return result;
}

console.log(solution(input));
