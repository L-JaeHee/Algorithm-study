const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

input = input.split("\n").map((value) => Number(value));
const n = input.shift();

function solution(input) {
  const stack = [];
  const answer = [];
  let current = 1;
  let cursor;

  for (let number of input) {
    cursor = current;

    for (let i = cursor; i <= number; i++) {
      stack.push(i);
      answer.push("+");
      current++;
    }

    const popedNumber = stack.pop();
    if (popedNumber !== number) {
      return "NO";
    } else {
      answer.push("-");
    }
  }

  return answer.join("\n");
}

console.log(solution(input));
