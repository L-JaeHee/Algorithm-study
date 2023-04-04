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
  input.pop();
  const result = [];
  const stack = [];
  let flag;

  for (let str of input) {
    stack.length = 0;
    flag = false;

    for (let char of str) {
      if (char === "(" || char === "[") {
        stack.push(char);
      }

      if (char === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (char === ")" && stack[stack.length - 1] !== "(") {
        flag = true;
        break;
      }

      if (char === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (char === "]" && stack[stack.length - 1] !== "[") {
        flag = true;
        break;
      }
    }

    if (flag || stack.length !== 0) {
      result.push("no");
    } else {
      result.push("yes");
    }
  }

  return result.join("\n");
}

console.log(solution(input));
